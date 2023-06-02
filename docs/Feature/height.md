---
sidebar_position: 1
---

# Height

:::caution Suggestion

It is recommended to use a static height, although the auto height is very convenient, but it will cause bad visual effects, flashing to open the layout
:::


## Static Height
You can use your own units **like px, rem, %**

```tsx
<BearCarousel 
    // ...ignore some 
    staticHeight="250px"
/>
```

## Aspect Ratio Height

If you want to set the height proportionally, you can do

```tsx
<BearCarousel 
    // ...ignore some 
    aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
/>
```
