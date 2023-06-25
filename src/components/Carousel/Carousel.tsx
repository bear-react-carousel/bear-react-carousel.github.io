import * as React from 'react';
import BearCarousel, {IBearCarouselProps} from 'bear-react-carousel';
import {divData} from "./data";
import BrowserOnly from "@docusaurus/BrowserOnly";



const Carousel = (props: IBearCarouselProps) => {
    return <BrowserOnly>
        {() => {
            return <BearCarousel
                data={divData}
                height="250px"
                isEnableNavButton
                {...props}
            />
        }}
    </BrowserOnly>

}

export default Carousel;



