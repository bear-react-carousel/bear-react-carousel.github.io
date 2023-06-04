import React from "react";
import Carousel from "./Carousel";


const BreakpointsCarousel = () => {
    return <Carousel
        slidesPerView={1}
        aspectRatio={{widthRatio: 22, heightRatio: 9}}
        isEnablePagination
        isEnableLoop
        breakpoints={{
            768: {
                slidesPerView: 2,
                aspectRatio: {widthRatio: 16, heightRatio: 9},
                isEnableLoop: false,
                isEnablePagination: false,
                isEnableNavButton: false,
            },
            1200: {
                slidesPerView: 4,
                aspectRatio: {widthRatio: 32, heightRatio: 9},
                isEnableLoop: true,
                isEnablePagination: true,
                isEnableNavButton: true,
            }
        }}
    />;
}


export default BreakpointsCarousel;
