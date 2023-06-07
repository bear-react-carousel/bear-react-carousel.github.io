---
sidebar_position: 1
---

# Bear Carousel
If you want to do some customization

```tsx
import BearCarousel from 'bear-react-carousel';

<BearCarousel
    // ...ignore some 
    height="250px"
/>
```


## Props

| PropsName          | Type                     | Required | Default  | Description                                    |
|--------------------|--------------------------| -------- |----------|------------------------------------------------|
| style              | CSS.Properties           |          |          |                                                |
| className          | string                   |          |          |                                                |
| controllerRef      | RefObject<Controller\>   |          |          | Control carousel                               |
| syncCarouselRef    | RefObject<BearCarousel\> |          |          | Auto sync control bear-react-carousel          |
| data               | IBearSlideItemData[]     |          |          | Slide item data                                |
| slidesPerView      | number \| auto           |          | 1        | The number of items displayed in the container |
| slidesPerGroup     | number                   |          | 1        | Show several items on one page                 |
| defaultActivePage  | number                   |          | 1        | Default slide to page                          |
| height             | string\|IAspectRatio     |          |          | Carouse height                                 |
| spaceBetween       | number                   |          |          | distance between items                         |
| moveTime           | number                   |          | 500(ms)  | Slide moving time                              |
| isCenteredSlides   | boolean                  |          | false    | Center display mode                            |
| isEnableLoop       | boolean                  |          | false    | Repeat display loop mode                       |
| isEnablePagination | boolean                  |          | false    | Show pagination                                |
| isEnableNavButton  | boolean                  |          | false    | Show nav button                                |
| isEnableMouseMove  | boolean                  |          | true     | Mouse drag switch                              |
| isEnableAutoPlay   | boolean                  |          | false    | Auto slide item                                |
| isSlideItemMemo    | boolean                  |          | false    | data cache mode (useMemo) cache default is key |
| autoPlayTime       | number                   |          | 5000(ms) | Auto slide item time                           |
| renderNavButton    | TRenderNavButton         |          |          | Custom render nav button                       |
| renderPagination   | TRenderPagination        |          |          | Custom render pagination                       |
| breakpoints        | IPropsBreakpoints        |          |          | RWD breakpoints                                |
| onChange           | TStateOnChange           |          |          | Carousel state change event                    |
| onMount            | () => void               |          |          | Carousel componentDidMount event               |
| isDebug            | boolean                  |          |          | Visible debug info                             |


### IBearSlideItemData


| PropsName              | Type                            | Required | Default | Description                                       |
|----------------------- | -----------------------------   | -------- | ------- | -------------------------------------             |
| key                    | string\|number                  |    ✓     |         |                                                   |
| children               | BearSlideCard \| BearSlideImage |    ✓     |         | Slide item component                              |
| onClick                | () => void                      |          |         | Slide item click event                            |


### TRenderNavButton

```tsx
type TRenderNavButton = (toPrev: () => void, toNext: () => void) => void
```

### TRenderPagination

```tsx
type TRenderPagination = (pageTotal: number) => JSX.Element[]
```

### IPropsBreakpoints

```tsx
interface IPropsBreakpoints {
  [key: number]: Partial<IBreakpointSetting>
}

interface IBreakpointSetting {
  slidesPerView: TSlidesPerView
  slidesPerGroup: number
  height?: string|IAspectRatio
  spaceBetween: number
  isCenteredSlides: boolean
  isEnableLoop: boolean
  isEnablePageContent: boolean
  isEnablePagination: boolean
  isEnableNavButton: boolean
  isEnableMouseMove: boolean
  isEnableAutoPlay: boolean
}
```

### TStateOnChange

```tsx
type TStateOnChange = (carouselState: ICarouselState) => void

interface ICarouselState {
  element: {
    total: number
    firstIndex: number
    lastIndex: number
    activeIndex: number
  }
  actual: {
    activeIndex: number
    minIndex: number
    maxIndex: number
    firstIndex: number
    lastIndex: number
  }
  page: {
    activePage: number
    pageTotal: number
  }
}
```

