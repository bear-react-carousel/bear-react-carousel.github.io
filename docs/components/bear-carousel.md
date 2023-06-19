---
sidebar_position: 1
tags:
  - Components
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

| Props Name         | Type                                                   | Required | Default  | Description                                    |
|--------------------|--------------------------------------------------------| -------- |----------|------------------------------------------------|
| style              | CSS.Properties                                         |          |          |                                                |
| className          | string                                                 |          |          |                                                |
| setController      | (controller: [Controller](#controller)) => void        |          |          | Manual control carousel                        |
| syncCarouselRef    | RefObject<[BearCarousel](/docs/feature/sync-control)\> |          |          | Auto sync control bear-react-carousel          |
| data               | [IBearSlideItemData](#ibearslideitemdata)[]            |          |          | Slide item data                                |
| slidesPerView      | number \| auto                                         |          | 1        | The number of items displayed in the container |
| slidesPerGroup     | number                                                 |          | 1        | Show several items on one page                 |
| height             | string \| [IAspectRatio](#iaspectratio)                |          |          | Carouse height                                 |
| spaceBetween       | number                                                 |          |          | distance between items                         |
| moveTime           | number                                                 |          | 500(ms)  | Slide moving time                              |
| isCenteredSlides   | boolean                                                |          | false    | Center display mode                            |
| isEnableLoop       | boolean                                                |          | false    | Repeat display loop mode                       |
| isEnablePagination | boolean                                                |          | false    | Show pagination                                |
| isEnableNavButton  | boolean                                                |          | false    | Show nav button                                |
| isEnableMouseMove  | boolean                                                |          | true     | Mouse drag switch                              |
| isEnableAutoPlay   | boolean                                                |          | false    | Auto slide item                                |
| isSlideItemMemo    | boolean                                                |          | false    | data cache mode (useMemo) cache default is key |
| autoPlayTime       | number                                                 |          | 5000(ms) | Auto slide item time                           |
| renderNavButton    | [TRenderNavButton](#trendernavbutton)                  |          |          | Custom render nav button                       |
| renderPagination   | [TRenderPagination](#trenderpagination)                |          |          | Custom render pagination                       |
| breakpoints        | [IPropsBreakpoints](#ipropsbreakpoints)                |          |          | RWD breakpoints                                |
| onSlideChange      | [TStateOnChange](#tstateonchange)                      |          |          | Carousel state change event                    |
| onMount            | () => void                                             |          |          | Carousel componentDidMount event               |
| isDebug            | boolean                                                |          |          | Visible debug info                             |


### Controller

| Method Name        | Type                                                                                      | Default | Description        |
|--------------------|-------------------------------------------------------------------------------------------|---------|--------------------|
| slideToPrevPage    | () => void                                                                                |         | Slide to prev page |
| slideToNextPage    | () => void                                                                                |         | Slide to next page |
| slideToPage        | (page: number, isUseAnimation = true) => void                                             |         | Slide target page  |
| slideToSourceIndex | (slideIndex: number, options?: {isUseAnimation?: boolean, isEmitEvent?: boolean}) => void |         | Slide target item  |


### IBearSlideItemData


| Props Name | Type                                                                                                     | Required | Default | Description                                       |
|------------|----------------------------------------------------------------------------------------------------------| -------- | ------- | -------------------------------------             |
| key        | string \| number                                                                                         |    ✓     |         |                                                   |
| children   | [BearSlideCard](/docs/components/bear-slide-card) \| [BearSlideImage](/docs/components/bear-slide-image) |    ✓     |         | Slide item component                              |
| onClick    | () => void                                                                                               |          |         | Slide item click event                            |


### IAspectRatio

Here we use the proportional property of CSS [aspect-ratio](https://caniuse.com/?search=aspect-ratio) (not the padding-bottom % method)

| Props Name      | Type      | Required | Default | Description            |
|-----------------|-----------| -------- |---------|------------------------|
| widthRatio      | number    |    ✓     |         | proportionately width  |
| heightRatio     | number    |    ✓     |         | proportionately high   |
| addStaticHeight | string    |          |         | add extra padding      |



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
  source: {
    activeIndex: number
    lastIndex: number
    total: number
  }
  virtual: {
    activeIndex: number
    lastIndex: number
    total: number
  }
  page: {
    activePage: number
    total: number
  }
}
```

