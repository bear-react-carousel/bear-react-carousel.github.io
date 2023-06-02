---
sidebar_position: 1
---

# SlidesPerView
Specify how many to display at a time within the visible range, or how many to display on a page

## Number
This represents a page displaying 3 items

```tsx
<BearCarousel 
    // ...ignore some 
    slidesPerView={3}
/>
```

## Auto

If each of your carousel items is a fixed-size Card, but you don't want to change the Card Size because of the container size, you can use `auto`

```tsx
<BearCarousel 
    // ...ignore some 
    slidesPerView="auto"
/>
```
