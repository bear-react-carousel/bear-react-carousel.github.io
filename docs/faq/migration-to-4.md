---
title: Migration to 4.x version
tags:
  - Migration
---

From version 0 to version 4, there have been some changes. In addition to splitting from business logic, in order to make parameters and scope clearer, you need to change them accordingly

## BearSlideItem
Splitting into different components is to better distinguish props

```tsx
import {BearSlideItem} from 'bear-react-carousel';

const data = infos.map(row => {
    return {
        key: row.id,
        children: <BearSlideItem as="card">  {/* or image **/}
            {row.name}
        </BearSlideItem>
    }
});
```
Change to

```tsx
import {BearSlideCard, BearSlideImage} from 'bear-react-carousel';

const data = infos.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard>   {/* or BearSlideImage **/}
            {row.name}
        </BearSlideCard>
    }
});
```
As for the parameters, you can refer to [BearSlideCard](/docs/components/bear-slide-card) / [BearSlideImage](/docs/components/bear-slide-image)



## PageContent
Old in BearSlideItem, since this should be a page, not an item

```tsx
import BearCarousel, {BearSlideItem} from 'bear-react-carousel';

const data = infos.map(row => {
    return {
        key: row.id,
        pageContent: <>{row.name}</>,
        children: <BearSlideItem as="card">  {/* or image **/}
            {row.name}
        </BearSlideItem>
    }
});
```
Change to


```tsx
import BearCarousel, {BearSlideItem} from 'bear-react-carousel';

const data = infos.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard>   {/* or BearSlideImage **/}
            {row.name}
        </BearSlideCard>
    }
});

<BearCarousel
    data={data}
    isEnablePageContent
    renderPagination={(pageTotal: number) => {
        return foodImages.map(row => {
            return <CustomPage key={row.id}>{row.title}</CustomPage>;
        });
    }}
/>
```

If you need a reference case, you can get it from [auto-play-progress](/docs/examples/auto-play-progress)


## Height
This attribute should be one of the two, so I merged it into the same attribute

```
staticHeight -> height
aspectRatio -> height
```

### Static Height

```tsx
<BearCarousel
    data={data}
    staticHeight="200px"
/>
```

change to
```tsx
<BearCarousel
    data={data}
    height="200px"
/>
```

### AspectRatio

```tsx
<BearCarousel
    data={data}
    aspectRatio={{widthRatio: 32, heightRatio: 9}}
/>
```

change to
```tsx
<BearCarousel
    data={data}
    height={{widthRatio: 32, heightRatio: 9}}
/>
```
