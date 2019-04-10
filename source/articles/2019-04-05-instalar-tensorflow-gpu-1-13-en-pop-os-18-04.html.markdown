---
title: Instalar Tensorflow GPU 1.13 en Pop!_OS 18.04
date: 2019-04-05
tags: tensorflow nvidia cuda ubuntu pop_os
published: true
---
Pop!\_OS es una increíble distribución de Linux con base en Ubuntu. Pero lo que es más increíble de Pop!\_OS es su soporte para las tarjetas gráficas Nvidia y Tensorflow, que es un gran feature para optar por Pop!\_OS como distro. En este post mostraré los pasos para conseguir Tensorflow GPU 1.13 con python3.

<!-- READMORE -->

Pop!\_OS 18.04 da soporte a la tarjeta gráfica con una [imagen de ISO](https://system76.com/pop) que tiene los drivers privativos más actualizados que System76 da mantenimiento. El driver más actual es la version 418,puedes revisar la versión instalada en tu OS con el comando `nvidia-smi`.

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.56       Driver Version: 418.56                              |
|-------------------------------+----------------------+----------------------+
```

Pop!\_OS tiene un [metapaquete](https://support.system76.com/articles/install-tensorflow/) para instalar nativamente Tensorflow y su soporte a CUDA, sin embargo este metapaquete instala hasta la versión 1.9 de Tensorflow.

## Configurar Python 3

Primero instalamos los paquetes necesarios para iniciar nuestro desarrollo con python3, instalaremos pip y venv para manejar las dependencias de nuestros proyectos python.

```shell
$ sudo apt install python3-dev python3-pip python3-venv
```

## Instalar CUDA 10.0

Para instalar la versión 1.13, la última estable de Tensorflow, Necesitamos tener los drivers Nvidia 418 e instalar las siguientes dependecias para CUDA y Tensorflow.

```shell
$ sudo apt install autogen autogen-doc cmake cmake-data guile-2.0-libs libblas3 libgc1c2 libgfortran4 libjsoncpp1 liblapack3 libnvidia-compute-418 libopts25 libopts25-dev librhash0 libuv1 python3-numpy
```

Ahora instalar los paquetes necesarios de Nvidia CUDA.

```shell
$ sudo apt install system76-cuda-10.0 system76-cudnn-10.0
```

> Existen paquetes de CUDA con versión 10.1, sin embargo no tienen soporte para Tensorflow 1.13. [Ver aquí.](https://github.com/tensorflow/tensorflow/issues/26209#issuecomment-479127128)

## Instalar Tensorflow GPU

Creamos una nueva carpeta para nuestro proyecto

```shell
$ mkdir ~/test_tensorflow_gpu
$ cd test_tensorflow_gpu
```

Iniciamos un nuevo virtual environment para nuestras dependencias a este proyecto.

```shell
$ python3 -m venv venv
$ source venv/bin/activate
```

> Al tener activado el virtual environment ya nos permite ejecutar tanto `python3` como `pip3` como `python` y `pip` respectivamente.

Instala Tensorflow. El paquete correcto para instalar Tensorflow con soporte a CUDA es `tensorflow-gpu`.

```shell
(venv)
$ pip install --upgrade tensorflow-gpu
```

Prueba la instalación de Tensorflow.

```shell
(venv)
$ python -c "import tensorflow as tf; print(tf.test.is_built_with_cuda());"
True # <-- salida esperada
```
