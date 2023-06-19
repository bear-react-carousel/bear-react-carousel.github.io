import * as React from "react";
import {BearSlideCard, BearSlideImage} from "bear-react-carousel";
import ReactPlayer from 'react-player'

export const images = [
    {id: 1, image: require('@site/static/img/racing/01.jpg').default},
    {id: 2, image: require('@site/static/img/racing/02.jpg').default},
    {id: 3, image: require('@site/static/img/racing/03.jpg').default},
    {id: 4, image: require('@site/static/img/racing/04.jpg').default},
    {id: 5, image: require('@site/static/img/racing/05.jpg').default},
    {id: 6, image: require('@site/static/img/racing/06.jpg').default},
];


export const imagesAndVideo = [
    {id: 1, type: 'video', video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'},
    {id: 2, type: 'image', image: require('@site/static/img/racing/02.jpg').default},
    {id: 3, type: 'image', image: require('@site/static/img/racing/03.jpg').default},
    {id: 4, type: 'image', image: require('@site/static/img/racing/04.jpg').default},
    {id: 5, type: 'image', image: require('@site/static/img/racing/05.jpg').default},
    {id: 6, type: 'image', image: require('@site/static/img/racing/06.jpg').default},
];

export const divData = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard bgUrl={row.image}/>
    };
});
export const imageData = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideImage imageUrl={row.image}/>
    };
});

export const imageAndVideoData = imagesAndVideo.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard bgUrl={row.image}>
            {row.video &&
                <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            }
        </BearSlideCard>
    };
});


const numberColors = [
    {id: 1, color: 'green'},
    {id: 2, color: 'blue'},
    {id: 3, color: 'gray'},
    {id: 4, color: 'white'},
    {id: 5, color: 'black'},
    {id: 6, color: 'yellow'},
    {id: 7, color: 'purple'},
    {id: 8, color: 'red'},
];

export const colorData = numberColors.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard>
            <div style={{height: '100%', backgroundColor: row.color}}/>
        </BearSlideCard>
    };
});
