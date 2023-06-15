import * as React from 'react';
import BearCarousel, {elClassName, IBearCarouselProps} from 'bear-react-carousel';
import {divData} from "./data";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styled from 'styled-components';



const CustomNavCarousel = (props: IBearCarouselProps) => {
    return <BrowserOnly>
        {() => {
            return <CustomNavCarouselRoot>
                <BearCarousel
                    data={divData}
                    isEnableNavButton
                    renderNavButton={(toPrev, toNext) => {
                        return <div className={elClassName.navGroup}>
                            <CustomButton type="button" className={elClassName.navPrevButton} onClick={toPrev}>
                                {'く'}
                            </CustomButton>
                            <CustomButton type="button" className={elClassName.navNextButton} onClick={toNext}>
                                {'く'}
                            </CustomButton>
                        </div>
                    }}
                    height="250px"
                    {...props}
                />
            </CustomNavCarouselRoot>
        }}
    </BrowserOnly>

}

export default CustomNavCarousel;



const CustomButton = styled.button`
  &.${elClassName.navPrevButton},
  &.${elClassName.navNextButton}
  {
    background: none;
    color: #00a400;
    font-weight: 900;
    font-size: 20px;
  }
`;


const CustomNavCarouselRoot = styled.div`
  .${elClassName.root}[data-first-page="true"],
  .${elClassName.root}[data-last-page="true"]{
       .${elClassName.navPrevButton},
       .${elClassName.navNextButton} {
         opacity: 1;
         pointer-events: auto;
       }
  }
`;
