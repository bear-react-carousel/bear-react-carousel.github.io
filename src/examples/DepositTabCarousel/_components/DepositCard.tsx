import React, {useMemo, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {media} from 'bear-react-grid';
import {BearSlideCard} from 'bear-react-carousel';
import {IData} from '@site/src/examples/DepositTabCarousel/types';

interface IProps extends IData{
    onClick: (code: string) => void
    isActive?: boolean,
    // isVisible?: boolean,
    // isSelected?: boolean,
    // thumbUrl: string,
    // grayThumbUrl: string,
    // onClick: (elName: string)=> void,
}

const DepositCard = ({
     name,
     code,
     iconUrl,
     isActive,
     onClick,
     // isSelected,
     // thumbUrl,
     // isActive,
     // onClick,
 }: IProps) => {

    return <BearSlideCard onClick={() => onClick(code)}>
        <DepositIconContainer data-test-id={code}>
            <Icon src={iconUrl} isActive={isActive}/>
            <Name>{name}</Name>
        </DepositIconContainer>
    </BearSlideCard>
};

export default DepositCard;



const Name = styled.div`
  white-space: nowrap;
  font-size: 12px;
`


const Icon = styled.img<{
    isActive: boolean,
}>`
  margin: 0 auto;
  width: 44px;
  height: 44px;
  filter: grayscale(100%) contrast(80%);
  
  ${props => props.isActive && css`
    filter: grayscale(0%);
  `}
`;

const DepositIconContainer = styled.div`
  width: 60px;
  height: 80px;
  text-align: center;
  overflow: hidden; 
`;
