import * as React from 'react';
import BearCarousel, {BearSlideItem} from 'bear-react-carousel';
import {images} from "./data";
import BrowserOnly from '@docusaurus/BrowserOnly';


const StateCarousel = () => {
    const [activeId, setActiveId] = React.useState(0);
    const myData = React.useMemo(() => images.map(row => {
        const isActive = row.id === activeId;
        return {
            key: row.id,
            children: <BearSlideItem as="image"
                     imageUrl={row.image} onClick={() => setActiveId(row.id)}
                     style={isActive ? {transition: 'filter .4s', filter: 'blur(4px)'}: undefined}
            >
            </BearSlideItem>
        };
    }), [activeId]);

    return <BrowserOnly>
        {() => {
            return <BearCarousel
                data={myData}
                slidesPerView={3}
                isEnableNavButton
                aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
                isSlideItemMemo
            />
        }}
    </BrowserOnly>
}


export default StateCarousel;
