---
layout: post
title: "Notas sobre construir un orquestador de AI para un proyecto con varios repositorios"
date: 2026-08-26
categories: spanish
tags: [ai, claude, orchestration, git, workflow, herdr, obsidian, neovim, hunk, worktree]
---

En los últimos meses he usado agentes de AI para trabajar en un proyecto dividido en varios repositorios.
Al principio parecía suficiente abrir una sesión de [Claude Code](https://code.claude.com/docs/en/overview)
en cada repositorio en su respectiva rama y pedirle que trabajara en una parte del ticket.
Pero cuando una tarea necesitaba cambios en backend, frontend y otros repositorios, el problema dejó de ser generar código.
El problema era coordinar todo ese trabajo sin perder el contexto y moverse entre ventanas y tabs de terminal.

<!-- more -->

Por eso empecé a construir un pequeño hub de orquestación.
La idea es tener una sesión central de [Claude Code](https://code.claude.com/docs/en/overview),
el agente de AI que uso desde la terminal, que conoce el proyecto, revisa los tickets y envía el trabajo al repositorio correcto.
Esa sesión no escribe código.
Su trabajo es coordinar a los agentes que sí lo hacen.

En este post quiero compartir cómo funciona esta idea, qué partes me han resultado útiles y qué cosas todavía necesitan mejorar.
No creo que sea la única forma de trabajar con agentes de AI, pero hasta ahora me ha ayudado a mantener orden en un proyecto que está dividido en varios repositorios.

## El problema no era generar código

Un agente puede leer un repositorio, hacer un plan y modificar archivos bastante bien.
El problema aparece cuando una tarea necesita cambios en varios lugares.
Cada agente tiene su propio contexto y puede tomar decisiones que no coinciden con las decisiones de los demás.
También puede pasar que dos agentes trabajen sobre la misma rama o que una nueva sesión tenga que volver a investigar algo que ya se había discutido.

Mi primera decisión fue separar la coordinación de la implementación.
El orquestador lee el ticket, revisa el contexto que ya existe y pregunta en cuáles repositorios se necesita trabajar.
Después crea una sesión especializada para cada repositorio.

Esto parece una diferencia pequeña, pero me permite tener una sola vista del trabajo sin darle a una sesión demasiado poder.
El orquestador no cambia código, no crea commits y no hace push.
Cada agente trabaja con las reglas, herramientas y pruebas de su propio repositorio.

## Worktrees y memoria compartida

Para aislar el trabajo uso [Git worktrees](https://git-scm.com/docs/git-worktree) gestionados por [Worktrunk](https://worktrunk.dev).
Cada ticket obtiene su propio directorio y su propia rama, así que un agente puede trabajar sin modificar el directorio principal y sin interferir con otro ticket.
También puedo abrir ese worktree en [Neovim](https://neovim.io/) y revisar los cambios mientras el agente continúa trabajando.

Para monitorear cada tarea uso [Herdr](https://github.com/motionharvest/herdr), un multiplexor de terminal para coordinar agentes, con una pestaña para [Claude Code](https://code.claude.com/docs/en/overview), otra para [Neovim](https://neovim.io/) y otra para ver el diff en vivo usando [Hunk](https://github.com/modem-dev/hunk), un visor de diffs de Git para la terminal.
Cada worktree tiene su propio workspace de Herdr, así que puedo ver lo que está haciendo cada agente y revisar los cambios sin mezclar el contexto de un ticket con otro.
No es un sistema automático de aprobación.
Es solamente una forma práctica de tener a la vista lo que está ocurriendo y poder intervenir cuando algo no se ve bien.

El otro problema era la memoria.
Si cada sesión empieza desde cero, una parte importante del tiempo se pierde leyendo el proyecto y reconstruyendo decisiones anteriores.
Para evitarlo uso un vault de [Obsidian](https://obsidian.md/) como memoria compartida.
Ahí guardo notas de los tickets, planes y contexto que puede servir para las siguientes tareas.

Antes de enviar un agente, el orquestador consulta esa memoria y le pasa solamente la información que necesita.
De esta forma el vault funciona como una fuente común de contexto, pero el código continúa siendo responsabilidad de cada repositorio.

## Cómo se ve una tarea

El flujo que uso ahora es más o menos el siguiente:

1. El orquestador lee el ticket y determina conmigo qué partes del proyecto necesitan cambios.
2. Consulta las notas existentes para no repetir investigación.
3. Crea un worktree y abre un agente especializado por cada repositorio involucrado.
4. Los agentes preparan un plan a revisar antes de escribir código.
5. Una vez aprobado el plan, los agentes hacen cambios, crean commits y hacen push a sus ramas.
6. Después de hacer merge, el orquestador guarda el contexto útil y elimina los worktrees que ya no se necesitan.

La revisión humana sigue siendo importante.
En especial para cambios de frontend, prefiero revisar el plan antes de que el agente empiece a modificar archivos. Hago pruebas manuales y capturas de pantalla que sirven de documentación
para el pull request.

Revisar un plan toma poco tiempo y es mucho más simple que corregir una implementación completa basada en una idea equivocada.

También uso el diff en vivo para revisar el trabajo sin esperar un reporte final.
No necesito preguntar constantemente por el estado del ticket.
Puedo ver si el agente está trabajando, si necesita ayuda o si está cambiando algo que no esperaba.

## Lo que todavía no funciona tan bien

El sistema no está libre de problemas.
La memoria compartida usa symlinks en algunos lugares y eso hace que la creación y limpieza de worktrees necesite más cuidado del que me gustaría.
Una mala secuencia puede dejar un enlace roto o hacer que una nota no termine donde esperaba.

La limpieza de ramas también es más complicada de lo que parecía.
No basta con revisar si existe una rama.
El sistema debe confirmar que el cambio ya fue integrado antes de eliminar el worktree y la rama local.
Por eso prefiero que cada repositorio termine su propio flujo de commit, push y pull request, y que el orquestador solamente limpie después.

La otra limitación es encontrar información en el vault.
Guardar notas es sencillo, pero después de varias tareas ya no es práctico buscar archivo por archivo.
Por ahora uso búsqueda por palabras y búsqueda semántica, aunque creo que la memoria necesitará un mejor índice conforme crezca el proyecto.

También he aprendido que guardar todo no significa tener buena memoria.
Las notas deben ser cortas, claras y útiles para la siguiente sesión.
De lo contrario solamente estamos moviendo el problema del contexto a una carpeta con demasiados archivos.

### En conclusión

Construir este orquestador no hizo que los agentes escribieran mejor código de forma automática.
Lo que mejoró fue la coordinación.
Ahora cada agente tiene un espacio aislado, recibe el contexto necesario y trabaja dentro de las reglas de su repositorio.
Yo mantengo una vista general de los ticket y todavía debo revisar los planes y los cambios antes de aceptarlos.

Lo más útil para mí ha sido separar tres responsabilidades: coordinar el trabajo, implementar los cambios y conservar el conocimiento.
[Claude Code](https://code.claude.com/docs/en/overview) se encarga de una parte, [Git worktrees](https://git-scm.com/docs/git-worktree) de otra y el vault de [Obsidian](https://obsidian.md/) mantiene el contexto entre sesiones.
Tener una visibilidad completa de lo que ocurre en cada worktree con [Herdr](https://github.com/motionharvest/herdr) me permite intervenir cuando es necesario.

Aún hay detalles por simplificar, especialmente la sincronización de la memoria y la limpieza de worktrees.
Pero como experimento ha sido una buena forma de trabajar con varios agentes sin perder por completo el control del proyecto.
