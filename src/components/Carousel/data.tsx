import {BearSlideItem} from "bear-react-carousel";
import * as React from "react";

export const images = [
    {id: 1, image: require('@site/static/img/racing/01.jpg').default},
    {id: 2, image: require('@site/static/img/racing/02.jpg').default},
    {id: 3, image: require('@site/static/img/racing/03.jpg').default},
    {id: 4, image: require('@site/static/img/racing/04.jpg').default},
    {id: 5, image: require('@site/static/img/racing/05.jpg').default},
    {id: 6, image: require('@site/static/img/racing/06.jpg').default},
];
export const divData = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideItem as="card" imageUrl={row.image}/>
    };
});
export const imageData = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideItem as="image" imageUrl={row.image}/>
    };
});
