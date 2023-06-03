import * as React from 'react';
import Carousel from './Carousel';
import {divData, imageData} from "./data";
import BearCarousel from "bear-react-carousel";


const SyncCarousel = () => {
    const syncCarouselRef = React.useRef<BearCarousel>(null);

    return <div>
            <BearCarousel
                ref={syncCarouselRef}
                data={divData}
                slidesPerView={3}
                isCenteredSlides
                staticHeight="200px"
                isEnableNavButton
                isEnablePagination
                isDebug
            />

            <BearCarousel
                syncCarouselRef={syncCarouselRef}
                data={divData}
                slidesPerView={1}
                isCenteredSlides
                staticHeight="200px"
                isEnableNavButton
                isEnablePagination
                isDebug
            />
    </div>
}


export default SyncCarousel;