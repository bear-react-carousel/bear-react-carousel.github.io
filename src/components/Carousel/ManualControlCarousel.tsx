import * as React from 'react';
import {divData, imageData} from "./data";
import BearCarousel, {Controller, ICarouselState} from "bear-react-carousel";
import BrowserOnly from "@docusaurus/BrowserOnly";
import {useState} from "react";


const ManualControlCarousel = () => {
    const [controller, setController] = useState<Controller>();
    const [carouselState, setCarouselState] = useState<ICarouselState>();

    return <BrowserOnly>
        {() => {
            return <div>
                <BearCarousel
                    setController={setController}
                    onChange={setCarouselState}
                    data={divData}
                    slidesPerView={1}
                    isCenteredSlides
                    height="200px"
                    isEnableNavButton
                    isEnablePagination
                    isDebug
                />

                <div className="button-group mt-2">
                    {new Array(carouselState?.page.pageTotal).fill('').map((row, i) => {
                        return <button type="button" className="button button--sm button--info" onClick={() => controller?.slideToPage(i+1)}>Page {i+1}</button>
                    })}
                </div>

            </div>
        }}
    </BrowserOnly>
}


export default ManualControlCarousel;
