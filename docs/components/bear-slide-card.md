---
sidebar_position: 3
---

# Bear Slide Card
If you want to do some customization

```tsx
import BearCarousel, {BearSlideCard} from 'bear-react-carousel';

const numberColors = [
    {id: 1, color: 'green'},
    {id: 2, color: 'blue'},
    {id: 3, color: 'gray'},
];
const data = numberColors.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard>
            <div style={{height: '100%', backgroundColor: row.color}}/>
        </BearSlideCard>
    };
});

<BearCarousel
    // ...ignore some 
    staticHeight="250px"
    data={data}
/>
```


## Props

| PropsName     | Type           | Required | Default | Description                          |
|-------------- | -------------- | -------- | ------- | -------------------------------------|
| style         | CSS.Properties |          |         |                                      |
| className     | string         |          |         |                                      |
| bgUrl         | string         |          |         | Card background image url            |
| bgSize        | string         |          |  cover  | Card background image size           |
| children      | JSX.Element    |          |         | Card content                         |
| onClick       | () => void     |          |         | Card onclick event                   |
