---
sidebar_position: 1
tags:
  - React Carousel
  - React Slick
  - Swiper
---

# Why Bear Carousel

This is a `React Carousel` developed directly using `Flexbox` 

:::tip Tip

non-js secondary development package into React, and only include the features you need, not too many cool effects that might complicate your usage or create other weird issues

:::

## Features

- Use React + Flexbox directly, not javascript in secondary development into React
- Easier to use
- Use Flexbox instead of adding inline Style to carousel items
- Number of times to avoid re-renders by key in carousel items or switch memo cache
- There is no need to set the style of the project, Bear React Carousel directly provides the components of your project, you only need to set the image URL and form an array, and put it in the data parameter.
- The size of the carousel, the height of the outer container is based, and the item container follows the size of the outer container
- The loop mode uses the cloning method to fill in the blanks at the beginning and end during cycling (If you try to change the order in the loop mode, you will encounter many [issues](/blog/Swiper%20carousel%20loop))
- The onClick event inside the SlideItem will not be triggered during sliding, thereby avoiding potential user experience issues

## Supports

- Supports both Web, Mobile
- Responsive setting parameters
- Navigation buttons can be directly moved out of the carousel area without being affected by overflow in simple usage situations
- Prevent onClick of carousel item from triggering on swipe
- Provide project scale setting + additional fixed size or fixed height setting
- Support two-way synchronous control of the second Carousel
- Support center mode
- Support carousel auto display items
- Support auto play
