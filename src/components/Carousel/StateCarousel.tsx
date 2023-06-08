import * as React from 'react';
import BearCarousel, {BearSlideImage} from 'bear-react-carousel';
import {images} from "./data";
import BrowserOnly from '@docusaurus/BrowserOnly';


const StateCarousel = () => {
    const [activeId, setActiveId] = React.useState(1);
    const myData = React.useMemo(() => images.map(row => {
        const isActive = row.id === activeId;
        return {
            key: row.id,
            children: <BearSlideImage
                     imageUrl={row.image} onClick={() => setActiveId(row.id)}
                     style={!isActive ? {transition: 'filter .4s', filter: 'blur(9px)'}: undefined}
            >
            </BearSlideImage>
        };
    }), [activeId]);

    return <BrowserOnly>
        {() => {
            return <BearCarousel
                data={myData}
                slidesPerView={3}
                isEnableNavButton
                height={{ widthRatio: 32, heightRatio: 9 }}
                isSlideItemMemo
            />
        }}
    </BrowserOnly>
}


export default StateCarousel;
