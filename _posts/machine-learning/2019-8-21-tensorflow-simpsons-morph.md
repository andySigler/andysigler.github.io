---
layout: page
title: Tensorflow Simpsons Morph
subheadline: Properly Trained Autoencoder
teaser: A focus on hyperparameters to build the best model
breadcrumb: false
categories:
    - machine-learning
tags:
    - tensorflow

image:
    thumb: simpsons-morph-title-small.png
    title: simpsons-morph-title.png

header: no

author: Andy Sigler

published: true
---

# [Click here to try it out!](https://andysigler.github.io/ml-experiments/experiments/4/output)

This experiment uses a convolutional autoencoder for performing principle component analysis on images of The Simpsons faces.

This time, I wanted to focus on hyper-parameter tuning. Instead of guessing hyper-parameters and then overfitting, instead I built methods for iteratively training different parameters, and then analyzing the results on validation data.
