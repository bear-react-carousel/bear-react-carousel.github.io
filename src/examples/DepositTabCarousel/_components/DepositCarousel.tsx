import React, {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import BearCarousel, {Controller, elClassName} from 'bear-react-carousel';
import DepositCard from './DepositCard';
import {IData} from '@site/src/examples/DepositTabCarousel/types';



interface IProps {
    data?: IData[]
    activeCode: string,
    onChange?: (code) => void
}



const DepositCarousel = ({
    data,
    activeCode,
    onChange,
 }: IProps) => {
    const [controller, setController] = useState<Controller>();

    const depCodes = data?.map(row => row.code);

    const slideItems = useMemo(() => {
        return data?.map(row => {
            const isActive = activeCode === row.code;
            return {
                key: row.code,
                children: <DepositCard
                    {...row}
                    isActive={isActive}
                    onClick={onChange}
                />
            }
        })
    }, [depCodes, activeCode]);

    useEffect(() => {
        if(controller && activeCode){
            const targetIndex = data?.findIndex(row => row.code === activeCode) ?? -1;
            controller?.slideToSourceIndex(targetIndex - 2);
        }
    }, [controller, activeCode, depCodes])


    if(activeCode){
        return <DepositCarouselRoot>
            <BearCarousel
                setController={setController}
                isEnableNavButton
                slidesPerView="auto"
                data={slideItems}
                isSlideItemMemo
            />
        </DepositCarouselRoot>;
    }

    return <DepositCarouselRoot>
        {slideItems?.map(row => {
            return <SlideItem className={elClassName.slideItem}>{row.children}</SlideItem>;
        })}
    </DepositCarouselRoot>
};

export default DepositCarousel;


const SlideItem = styled.div`
  margin-bottom: 10px;
`;

const DepositCarouselRoot = styled.div`
    margin-bottom: 30px; 
    display: flex;
    flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;
