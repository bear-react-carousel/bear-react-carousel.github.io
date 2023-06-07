import * as React from 'react';
import {divData, imageData} from "./data";
import BearCarousel from "bear-react-carousel";
import BrowserOnly from "@docusaurus/BrowserOnly";


const SyncCarousel = () => {
    const syncCarouselRefA = React.useRef<BearCarousel>(null);
    const syncCarouselRefB = React.useRef<BearCarousel>(null);

    return <BrowserOnly>
        {() => {
            return <div>
                <BearCarousel
                    ref={syncCarouselRefA}
                    syncCarouselRef={syncCarouselRefB}
                    data={divData}
                    slidesPerView={3}
                    isCenteredSlides
                    height="200px"
                    isEnableNavButton
                    isEnablePagination
                    isDebug
                />

                <BearCarousel
                    ref={syncCarouselRefB}
                    syncCarouselRef={syncCarouselRefA}
                    data={divData}
                    slidesPerView={1}
                    isCenteredSlides
                    height="200px"
                    isEnableNavButton
                    isEnablePagination
                    isDebug
                />
            </div>
        }}
    </BrowserOnly>
}


export default SyncCarousel;
