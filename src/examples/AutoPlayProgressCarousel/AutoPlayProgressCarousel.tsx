import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import BearCarousel, {elClassName, TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';
import {media} from 'bear-react-grid';
import {images} from '../../components/Carousel/data';
import gridConfig from "@site/src/config/grid";
import {GridThemeProvider} from "bear-react-grid";
import BrowserOnly from '@docusaurus/BrowserOnly';


// 輪播項目
const bearSlideItemData: TBearSlideItemDataList = images.map(row => {
    return {
        key: row.id,
        paginationContent: <>test</>,
        children: <BearSlideItem imageUrl={row.image}/>
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


    return <CarouselBox className="mb-4 mb-lg-5">
        <GridThemeProvider gridTheme={gridConfig}>
            <BrowserOnly>
                {() => {
                    return <BearCarousel
                        data={isLoadData ? bearSlideItemData: []}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        isEnablePagination
                        isEnableNavButton
                        isEnableLoop
                        autoPlayTime={autoPlayTime}
                        isEnableAutoPlay
                        aspectRatio={{widthRatio: 16, heightRatio: 9}}
                        breakpoints={{
                            1200: {
                                aspectRatio: {widthRatio: 32, heightRatio: 9}
                            }
                        }}
                    />
                }}
            </BrowserOnly>
        </GridThemeProvider>
    </CarouselBox>;
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


const CarouselBox = styled.div`
    
    .${elClassName.paginationContent}{
        display: none;
    }

    .${elClassName.paginationGroup}{
        bottom: 0;
    }
    .${elClassName.paginationButton}{
        &:after {
            content: '';
            width: 0;
            height: 4px;
            background-color: ${props => props.theme.primaryColor};
            position: absolute;
            bottom: 0;
            left: 0;
        }

        &[data-active=true]:after {
            animation: ${progress} ${autoPlayTime}ms linear infinite;
            animation-iteration-count: 1;
        }
    }

    
    

    ${props => css`
       ${media.xl`
            .${elClassName.paginationGroup}{
                left: 0;
                right: 0;
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
    
            .${elClassName.paginationContent}{
                display: flex;
            }
        `}
    `}   
    
`;

