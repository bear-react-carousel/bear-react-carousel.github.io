---
sidebar_position: 1
---

# Why Bear Carousel

This is a carousel developed directly using React + Flexbox 

:::danger Focus
non-js secondary development package into React, and only include the features you need, not too many cool effects that might complicate your usage or create other weird issues
:::

# 


## Features

- Use React + Flexbox directly, not javascript in secondary development into React
- Easier to use
- Supports both Web, Mobile
- Responsive setting parameters
- Navigation buttons can be directly moved out of the carousel area without being affected by overflow in simple usage situations
- Use Flexbox instead of adding inlineStyle to carousel items
- When the image data is loaded asynchronously, it will not be displayed because BearCarousel has componentDidMount, and the image has been loaded but not displayed. Additional processing is required.
- There is no need to set the style of the project, Bear React Carousel directly provides the components of your project, you only need to set the image URL and form an array, and put it in the data parameter.
- The size of the carousel, the height of the outer container is based, and the item container follows the size of the outer container
- Provide project scale setting + additional fixed size or fixed height setting
- Prevent onClick of carousel item from triggering on swipe
- Support one-way synchronous control of the second Carousel
- Number of times to avoid re-renders by key in carousel items or switch memo cache
