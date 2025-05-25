---
layout: post
title: Vibe Coding mi sitio en Jekyll
categories: spanish
tags: ai vibe-coding jekyllrb
date: 2025-05-25 15:03 -0600
---
Esta semana decidí actualizar mi sitio personal. Volví a [Jekyll](https://jekyllrb.com){:target="_blank"}
después de varios años y actualicé las dependencias de mi blog,
[TailwindCSS v4](https://tailwindcss.com){:target="_blank"} y [DaisyUI](https://daisyui.com){:target="_blank"},
que es muy útil con sus "component classes". Y decidí darle un *chance* a la
AI para ayudarme a migrar mi sitio a Jekyll y a una nueva UI.

<!-- MORE -->

Como Ingeniero de Software me es muy interesante todo lo que la comunidad hace
con "Vibe Coding". Y existen muchas opiniones y muchos comentarios de
hasta donde llegaría el límite de AI como asistente o un reemplazo del Ingeniero
de Software.

De nuevo al tópico de este sitio, al principio en su primera versión creé el sitio
con Jekyll y hosteando en Github Pages. Posteriormente encontré [Middleman](https://middlemanapp.com){:target="_blank"}
y me pareció muy interesante la forma de crear el contenido estático. Ya por
último y desde mi ultima versión migré el sitio de Middleman a
[Bridgetown](https://www.bridgetownrb.com){:target="_blank"}
y usando Netlify como hosting.

Y ahora, de vuelta a Jekyll. Y creo que Jekyll es la mejor plataforma para hacer
un sitio blog como este. Es simple y ha estado en el mercado por muchos años.
Y saltar de framework a framework cada que sale uno nuevo no es algo que quiera
hacer seguido, al menos no con este sitio.  Pero si quiero tenerlo actualizado,
quiero que las dependencias se mantengan actualizadas. Por eso opte por migrar mi
sitio a Jekyll y usar Vite con TailwindCSS y DaisyUI. Espero que estos ultimos no
requieran de mucho esfuerzo para actualizarse en el futuro.

## Y que tiene que ver el Vibe Coding?

Bueno, quiero enfocarme mas en escribir y quería darle un nuevo diseño a mi sitio
sin tanto problema o este caso sin invertir mucho tiempo.
Y también, probar que tan bueno sería la AI para hacer un diseño.
Un Blog es sencillo, y Tailwind y DaisyUI ya están en el contexto de entrenamiento
de las AI mas modernas, así que no fue tanto trabajo.

Para esto use VSCode, lamentablemente Neovim no tiene soporte avanzado para AI y
agentes o herramientas que editen archivos. Así que simplemente activé el
"Agent-mode" de VSCode y use Gemini 2.5 Pro.
Creé los archivos que necesitaba y solo pedí que haga una UI "mobile-first".

Luego de varias iteraciones sobre los templates, varios archivos,
y configuraciones obtuve un resultado satisfactorio.
Y no, no fue libre de errores. La paginación de posts no salio bien y ya tuve que
intervenir para arreglarlo. De igual forma en varios detalles visuales y
organización del código HTML. Pero donde si puedo decir que hizo un excelente
trabajo fue cuando le pedí que basado en un CSS que tenia estilos para Rouge
(el highligther default de Jekyll) hiciera uno con el tema *catppuccin-frappe*
para dark-mode y latte para el sitio en light-mode.
He aquí un ejemplo:

```ruby

# This is an example

def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

```

### En conclusión

Jekyll es una excelente opción para blogs y sitios estáticos. Tiene excelente
soporte y le apuesto a su longevidad para mi sitio personal. TailwindCSS y
DaisyUI son simples e increíbles, y la AI puede ser una gran ayuda para acelerar
el proceso de diseño y desarrollo, aunque siempre es bueno tener un ojo crítico
y hacer ajustes manuales cuando sea necesario. Para el fin de migrar mi sitio,
le doy un punto a la AI.

Puedes consultar el repositorio de este sitio en [Github](https://github.com/arandilopez/arandilopez.me){:target="_blank"}.
