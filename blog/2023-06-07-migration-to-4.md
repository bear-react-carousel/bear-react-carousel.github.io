---
slug: Swiper carousel loop
title: Swiper carousel design and how loop
authors: imaginechiu
tags: [swiper]
---

# Swiper carousel design and how loop

Research carousel mechanism

![swiper banner](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hUGGgfksWrUCK5VEVeUcfw@2x.png)

Today, while researching whether a dynamic Swiper carousel would affect dynamic text in Loop mode, I noticed that the approach in the latest version of Swiper is somewhat different.

I’ve been directly observing the elements as they move.


## Normal State
![Normal State](https://miro.medium.com/v2/resize:fit:2400/1*7qXF3NzsA0FnSKqU8k4sfQ.gif)

You can see that under normal circumstances, the method is similar to the general approach of implementing a carousel.

## Need Loop State
![Need Loop State](https://miro.medium.com/v2/resize:fit:2400/1*eHaFFqud-Mb3GVHVqEJLTw.gif)

We can see from the information in ‘aria-label’ that the active item is moved to the first position, then the sequence continues. For every move, we only need to activate the transition-duration animation. After the movement is completed, the animation is deactivated, and movement control should be locked until the completion of the movement.

actually not

```
// active 5 (is last)
1 / 5 (-1496 * 0)
2 / 5 (-1496 * 1)
3 / 5 (-1496 * 2)
4 / 5 (-1496 * 3)
5 / 5 (-1496 * 4)

// click next, active 1 
// then duration    0ms, transform: -4488px,
// then duration: 900ms, transform: -5984px, 
// move
2 / 5 (0)
3 / 5 (-1496px)
4 / 5 (-2992px)
5 / 5 (-4488px)
1 / 5 (-5984px)
// then duration 0ms


// click next, active 2
// then duration    0ms, transform: -4488px,
// then duration: 900ms, transform: -5984px,
3 / 5 (0)
4 / 5 (-1496px)
5 / 5 (-2992px)
1 / 5 (-4488px)
2 / 5 (-5984px)
// then duration 0ms
```
The speed is too fast to see the flaws

```ts
containerEl.style.transform = `translate3d(${-1904}px, 0px, 0px)`;
containerEl.style.transitionDuration = '0ms';
setTimeout(() => {
    containerEl.style.transform = `translate3d(${-3808}px, 0px, 0px)`;
    containerEl.style.transitionDuration = `${this._configurator.setting.moveTime}ms`;
}, 0);
```

So make up to move the next target sequence to the last one, then jump to the previous position, and then move to the last one

The sorting has changed, so it becomes the judgment whether it is the last or the first, and it is judged by order

---

## What problem can be solved


I originally thought that to loop, one must copy and then instantly replace and reset. By doing so, we can avoid issues related to additional copying and the fact that objects are not identical. Each time, a new object needs to be created.

Because changing the array order requires re-Render

It is worth thinking that if the order of the array is actually changed, you can consider whether to use css order to achieve the same effect


## What problems will you encounter

![Loop mode, total item 5, slidePreView 3](https://miro.medium.com/v2/resize:fit:2400/1*djAzNr7EbSSCExVz82fd2g.gif)

- When the number of Swiper’s Loop is not divisible, it seems that the mobile computing has not been handled well.

- When sliding manually, or when the number is insufficient, or moving from the first page to the last page, there will be some challenges

As of now, the use of Clone might still be more advantageous than disadvantageous.

## Ref

[Check Not Clone Branch](https://github.com/imagine10255/bear-react-carousel/tree/test/230610/loop-no-copy-slide/imagine10255)

[Swiper carousel design and how loop](https://medium.com/@imaginechiu/swiper-carousel-design-and-how-loop-88159a88f4ae)
