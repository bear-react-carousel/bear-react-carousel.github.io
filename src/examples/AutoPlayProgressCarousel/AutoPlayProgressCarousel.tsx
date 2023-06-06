import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import BearCarousel, {elClassName, TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';
import gridConfig from "@site/src/config/grid";
import {GridThemeProvider, media} from "bear-react-grid";
import BrowserOnly from '@docusaurus/BrowserOnly';
import {foodImages} from "@site/src/examples/TextAnimationsCarousel/data";


// 輪播項目
const bearSlideItemData: TBearSlideItemDataList = foodImages.map(row => {
    return {
        key: row.id,
        children: <BearSlideItem imageUrl={row.imageUrl}/>
    };
});
const autoPlayTime = 5000;



interface IProps {
    isLoadData: boolean,
}

/**
 * TextCarousel
 */
const AutoPlayProgressCarousel = ({
    isLoadData = true
}: IProps) => {

    return <GridThemeProvider gridTheme={gridConfig}>
            <CarouselBox className="mb-4 mb-lg-5">
            <BrowserOnly>
                {() => {
                    return <BearCarousel
                        data={isLoadData ? bearSlideItemData: undefined}
                        renderPagination={(pageTotal: number) => {
                            return foodImages.map(row => {
                                return <CustomPage>{row.title}</CustomPage>;
                            });
                        }}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        isEnablePagination
                        isEnableNavButton
                        isEnableLoop
                        autoPlayTime={autoPlayTime}
                        isEnableAutoPlay
                        aspectRatio={{widthRatio: 16, heightRatio: 9}}
                        breakpoints={{
                            576: {
                                isEnablePageContent: true,
                                aspectRatio: {widthRatio: 32, heightRatio: 9}
                            }
                        }}
                    />
                }}
            </BrowserOnly>
            </CarouselBox>
        </GridThemeProvider>;
};

export default AutoPlayProgressCarousel;


const progress = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
`;


const CustomPage = styled.div`
    padding: 10px 20px;
`;


const CarouselBox = styled.div`
    .${elClassName.paginationContent}{
        background-color: rgba(255, 255, 255, .8);
    }

    ${props => css`
      
       ${media.sm`
           .${elClassName.paginationGroup}{
                bottom: 0;
                width: 100%;
                color: #000;
                overflow: hidden;
            }
            .${elClassName.paginationButton}{
                &:after {
                    content: '';
                    width: 0;
                    height: 4px;
                    background-color: greenyellow;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
        
                &[data-active=true]:after {
                    animation: ${progress} ${autoPlayTime}ms linear infinite;
                    animation-iteration-count: 1;
                }
            }
       `}
       ${media.xl`
            .${elClassName.paginationGroup}{
                bottom: -35px;
                background-color: #fff;
                height: 70px;
                width: 70%;
                margin: auto;
                display: flex;
                box-shadow: none;
            }
    
             .${elClassName.paginationButton}{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                font-size: 12px;
                font-weight: bold;
                color: #000;
                position: relative;
                flex: 1;
                background: transparent;
                border: solid 1px #ededed;
                border-radius: 0;
                margin: 0;
                padding: 0;
                box-shadow: none;
    
            }
    
        `}
    `}   
    
`;


