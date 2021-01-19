---
layout: post
title: Install Tensorflow GPU 1.13 on Pop!_OS 18.04
date: 2019-04-09
tags: tensorflow nvidia cuda ubuntu pop_os python
published: true
---

Pop!\_OS is an incredible Linux distribution based on Ubuntu. But what's more amazing about Pop!\_OS is its support for the Nvidia and Tensorflow graphics cards, which is a great feature to opt for Pop!\_OS as a distro. In this post I will show the steps to get Tensorflow GPU 1.13 with python3.

<!-- more -->

Pop!\_OS 18.04 supports the graphics card with [an ISO image](https://system76.com/pop) that has the most current proprietary drivers that System76 maintains. The most current driver is version 418, you can check the version installed on your OS with the command `nvidia-smi`.

```
+--------------------------------------------------------------------------+
| NVIDIA-SMI 418.56       Driver Version: 418.56                           |
|-------------------------------+----------------------+-------------------+
```

Pop!\_OS has a [metapackage](https://support.system76.com/articles/install-tensorflow/) to natively install Tensorflow and CUDA, however this metapackage installs up to version 1.9 of Tensorflow.

## Configure Python 3

First we install the necessary packages to start our development with python3, we will install pip and venv to manage the dependencies of our python projects.

```shell
$ sudo apt install python3-dev python3-pip python3-venv
```

## Install CUDA 10.0

To install version 1.13, the last stable of Tensorflow, we need to have the Nvidia 418 drivers and install the following dependencies for CUDA and Tensorflow.

```shell
$ sudo apt install autogen autogen-doc cmake cmake-data\
    guile-2.0-libs libblas3 libgc1c2 libgfortran4 libjsoncpp1\
    liblapack3 libnvidia-compute-418 libopts25 libopts25-dev\
    librhash0 libuv1 python3-numpy
```

Now install the necessary CUDA packages.

```shell
$ sudo apt install system76-cuda-10.0 system76-cudnn-10.0
```

> There are CUDA packages with version 10.1, however they do not have support for Tensorflow 1.13. [See here.](Https://github.com/tensorflow/tensorflow/issues/26209#issuecomment-479127128)

## Install Tensorflow GPU

We will create a new folder for our project

```shell
$ mkdir ~/test_tensorflow_gpu
$ cd test_tensorflow_gpu
```

We started a new virtual environment for our dependencies to this project.

```shell
$ python3 -m venv venv
$ source venv/bin/activate
```

> Having activated the virtual environment already allows us to run both `python3` and `pip3` as `python` and `pip` respectively.

Install Tensorflow. The correct package to install Tensorflow with CUDA support is `tensorflow-gpu`.

```shell
(venv)
$ pip install --upgrade tensorflow-gpu
```

Test the installation of Tensorflow.

```shell
(venv)
$ python -c "import tensorflow as tf; print(tf.test.is_built_with_cuda());"
True # <-- expected output
```
