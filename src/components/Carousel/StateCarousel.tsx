import * as React from 'react';
import BearCarousel, {BearSlideItem} from 'bear-react-carousel';
import {images} from "./data";


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

    return <BearCarousel
        data={myData}
        slidesPerView={3}
        isEnableNavButton
        staticHeight="250px"
        isSlideItemMemo
    />
}


export default StateCarousel;
