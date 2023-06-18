import React, {useEffect, useRef, useState} from 'react';
import BearCarousel, {
    TBearSlideItemDataList,
    Controller,
    ICarouselState,
    elClassName,
    BearSlideImage
} from 'bear-react-carousel';
import styled from 'styled-components';
import {useHotkeys} from 'react-hotkeys-hook';

// Stores
import { data } from '../../data';



interface IProps {
    activeIndex?: number,
    onClose: () => void,
}

const PreviewImageCarousel = ({
    activeIndex = 0,
    onClose,
}: IProps) => {
    const [carouselState, setCarouselState] = useState<ICarouselState>();
    const [controller, setController] = useState<Controller>();

    useHotkeys<HTMLDivElement>('esc', (e) => onClose(), []);
    useHotkeys<HTMLDivElement>('left', (e) => controller.slideToPrevPage(), [controller]);
    useHotkeys<HTMLDivElement>('right', (e) => controller.slideToNextPage(), [controller]);



    useEffect(() => {
        controller?.slideToSourceIndex(activeIndex, {isUseAnimation: false});
    }, [controller]);


    const images = data.map(row => {
        return {id: row.id, name: row.fileName, createdAt: row.createdAt, size: row.fileSize};
    });


    const getActivePage = () => {
        if(carouselState){
            return carouselState.page.activePage;
        }
        return 0;
    };

    const bearSlideItemData: TBearSlideItemDataList  = data?.map(row => {
        return {
            key: row.id,
            children: <BearSlideImage imageUrl={row.thumbUrl}/>
        };
    });


    const current = images[getActivePage() - 1];


    return (
        <PreviewImageRoot>
            <CloseButton onClick={onClose}>
                ✕
            </CloseButton>

            <BearCarousel
                data={bearSlideItemData}
                onSlideChange={setCarouselState}
                height="100%"
                setController={setController}
            />

            {current &&
                <Footer>
                    <PhotoName>{current.name}</PhotoName>
                    <CreatedAt>Create at {current.createdAt} - {current.size}</CreatedAt>
                    <Action>
                        <div className="mr-2">Remove Thumb</div>
                        <div className="mr-2">Delete</div>
                    </Action>

                    {getActivePage() > 1 && (
                        <PreButton type="button" onClick={controller?.slideToPrevPage}>
                            ﹤
                        </PreButton>
                    )}
                    {getActivePage() < images.length && (
                        <NextButton type="button" onClick={controller?.slideToNextPage}>
                            ﹥
                        </NextButton>
                    )}
                </Footer>
            }

        </PreviewImageRoot>
    );
};

export default PreviewImageCarousel;




const NavButton = styled.button`
  position: absolute;
  color: #fff;
  font-size: 20px;
  top: 0;
  bottom: 0;
`;

const PreButton = styled(NavButton)`
  left: 10px;
`;
const NextButton = styled(NavButton)`
  right: 10px;
`;


const Action = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  text-decoration: underline;
`;

const CreatedAt = styled.div`
    font-size: 14px;
  margin-bottom: 5px;
`;

const PhotoName = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;


const Footer = styled.div`
    height: 100px;
  background-color: #000000b3;
  text-align: center;
  padding-top: 10px;
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;


const Content = styled.div`
  width: 100%;
  height: 100%;
`;


const CloseButton = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  //background: #727272;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  font-size: 18px;
`;

const BlockImage = styled.img`
    width: auto;
    height: auto;
    max-width: 80vw;
`;


const PreviewImageRoot = styled.div`
    z-index: 997;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: auto;

    opacity: 1;
    pointer-events: auto;


  .${elClassName.slideItem}{
    overflow-y: auto;
  }

  .${elClassName.slideItemImage}{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      height: auto;
      padding-bottom: 140px;
      padding-top: 40px;
      max-height: 100%;
      max-width: 100%;
  }


`;



