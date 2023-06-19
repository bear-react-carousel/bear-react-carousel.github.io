---
sidebar_position: 1
tags:
  - Overflow
---

import Carousel from '@site/src/components/Carousel';


# Overflow issues

You might be using a flexbox layout and your content may be pushing aside the BearCarousel when in auto mode. Therefore, what you need is to add a `width:0` or `overflow:hidden` to the outer layer.

```tsx

<div className="d-flex">
    <div className="flex-auto">
        Menu
    </div>
    <div className="flex-fill" style={{width: 0}}>
        <BearReactCarousel/>
    </div>
</div>

```
