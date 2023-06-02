---
sidebar_position: 1
---

# Getting Started

Let's discover **Bear Carousel in less than 1 minutes**.

## Getting Started

Get started in **your project**.

Or **try Bear Carousel immediately** with **[CodeSandbox](https://codesandbox.io/s/bear-react-carousel-9h6eu?file=/src/CustomCarousel.tsx)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
- [React.js](https://react.dev/) version 18 or above:

## Installation

```bash
yarn add bear-react-carousel
```
You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

## Start your project

Add the required `style files` to your project `entry point`

```tsx
import 'bear-react-carousel/dist/index.css';
```

Then use code

```tsx
import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';

const images = [
  {id: 1, image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
  {id: 2, image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
  {id: 3, image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
];

export const CustomBanner = () => {
    const bearSlideItemData: TBearSlideItemDataList = images.map(row => {
        return {
            key: row.id,
            children: <BearSlideItem imageUrl={row.imageUrl}/>
        };
    });

    return <BearCarousel 
        data={bearSlideItemData} 
        staticHeight="400px"
    />
}
```
