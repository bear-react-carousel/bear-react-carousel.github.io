import * as React from 'react';
import BearCarousel, {BearSlideItem, IBearCarouselProps} from 'bear-react-carousel';

const images = [
    {id: 1, image: require('@site/static/img/racing/01.jpg').default},
    {id: 2, image: require('@site/static/img/racing/02.jpg').default},
    {id: 3, image: require('@site/static/img/racing/03.jpg').default},
    {id: 4, image: require('@site/static/img/racing/04.jpg').default},
    {id: 5, image: require('@site/static/img/racing/05.jpg').default},
    {id: 6, image: require('@site/static/img/racing/06.jpg').default},
];
const divData = images.map(row => {
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


const Carousel = (props: IBearCarouselProps) => {
    return <BearCarousel
        data={divData}
        isEnableNavButton
        staticHeight="250px"
        {...props}
    />

}

export default Carousel;



