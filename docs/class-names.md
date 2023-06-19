---
sidebar_position: 6
tags:
  - Custom CSS
---

# Class Names

:::tip Tip
When customizing the style, you will need to use the css className. You can refer to these names for intervention customization. Of course, if you don't like to write the name on it like me, you can use the variables we provide.

:::

```tsx
export default {
    root: 'bear-react-carousel__root',
    content: 'bear-react-carousel__content',
    container: 'bear-react-carousel__container',
    containerInit: 'bear-react-carousel__container-init',
    slideItem: 'bear-react-carousel__slide-item',
    slideItemImage: 'bear-react-carousel__slide-item__image',
    slideItemCard: 'bear-react-carousel__slide-item__card',
    navGroup: 'bear-react-carousel__nav-group',
    navPrevButton: 'bear-react-carousel__nav-prev-button',
    navNextButton: 'bear-react-carousel__nav-next-button',
    navIcon: 'bear-react-carousel__nav-icon',
    paginationGroup: 'bear-react-carousel__pagination-group',
    paginationButton: 'bear-react-carousel__pagination-button',
    paginationContent: 'bear-react-carousel__pagination-content',

    testNumber: 'bear-react-carousel__test-number',
    testWindowSize: 'bear-react-carousel__window-size',
    cloneIconGroup: 'bear-react-carousel__clone-icon-group',
    cloneIcon: 'bear-react-carousel__clone-icon',
};
```

## How to take advantage of this feature

```tsx
import {elClassName} from 'bear-react-carousel';

const TextAnimationsRoot = styled.div`
  --primary-color: #c4a265;

  .${elClassName.slideItem}{
  
      &[data-active=true]:not([data-is-clone]){
          ${AnimationsBox}{
               transform: translateY(-60px);
               opacity: 1;
          }
      } 
      
      :before{
        content: "";
        background: url('/static/sample/food/blackt-will.png') center center repeat;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
      }
  }
  
`;
```


## Layer

```css
elClassName.content{
    position: absolute;
    overflow: hidden;

    /* fix safari image auto width: 100% */
    min-width: 100%;
    max-width: 100%;
}
```
At first glance, this layer might appear to be unnecessary, but if we have a requirement to separate the pagination-group or nav, they would not be affected by the overflow from the outer layer.

The `position: absolute;` property on this layer can prevent some internal CSS settings from squeezing open the container.
