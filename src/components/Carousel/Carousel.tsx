import * as React from 'react';
import BearCarousel, {IBearCarouselProps} from 'bear-react-carousel';
import {divData} from "./data";



const Carousel = (props: IBearCarouselProps) => {
    return <BearCarousel
        data={divData}
        isEnableNavButton
        staticHeight="250px"
        {...props}
    />
}

export default Carousel;



