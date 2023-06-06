import React, {useEffect} from 'react';
import {GridThemeProvider} from "bear-react-grid";
import BearCarousel, {elClassName, TBearSlideItemDataList} from 'bear-react-carousel';
import styled from 'styled-components';
import {foodImages} from './data';
import gridConfig from '@site/src/config/grid';
import TextCard, {AnimationsBox} from './_components/TextCard';
import BrowserOnly from "@docusaurus/BrowserOnly";
import 'bear-react-grid/dist/index.css';

interface IProps {
    isLoadData: boolean,
}

/**
 * TextCarousel
 */
const TextAnimationsCarousel = ({
    isLoadData = true
}: IProps) => {

    // 輪播項目
    const slideItemData: TBearSlideItemDataList = foodImages.map(row => {
        return {
            key: row.id,
            children: <TextCard {...row}/>
        };
    });

    return <TextAnimationsRoot>
        <GridThemeProvider gridTheme={gridConfig}>
            <BrowserOnly>
                {() => {
                    return <BearCarousel
                        data={isLoadData ? slideItemData: []}
                        slidesPerView={1}
                        staticHeight="400px"
                        // isEnableAutoPlay
                        isEnableLoop
                        isEnableNavButton={false}
                        isEnablePagination
                        autoPlayTime={5000}
                        moveTime={900}
                        breakpoints={{
                            576: {
                                staticHeight: '400px',
                                isEnableNavButton: false,
                            },
                            996: {
                                staticHeight: '500px',
                                isEnableNavButton: true,
                            },
                            1200: {
                                staticHeight: '600px',
                                isEnableNavButton: true,
                            }
                        }}
                    />
                }}
            </BrowserOnly>


        </GridThemeProvider>
    </TextAnimationsRoot>;
};

export default TextAnimationsCarousel;



const TextAnimationsRoot = styled.div`
  --primary-color: #c4a265;

  .${elClassName.slideItem}{
      ${AnimationsBox}{
        transform: translateY(80px);
      }

      &[data-active=true]{
          ${AnimationsBox}{
               transform: translateY(0);
               opacity: 1;
          }
      }
      
      
      &:before{
        content: "";
        background: url(${require('@site/static/img/food/blackt-will.png').default}) center center repeat;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
      }
  }
  
`;
