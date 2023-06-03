
export interface IFoodImage {
    id: number,
    subTitle: string,
    title: string,
    desc: string,
    imageUrl: string,
    position: 'left'|'right',
}

export const foodImages: IFoodImage[] = [
    {
        id: 1,
        subTitle: 'MEAT & SEAFOOD',
        title: 'FROM NORWAY',
        desc: 'We offer huge variety of execeptionally fresh meat farmed in our personal farm',
        imageUrl: require('@site/static/img/food/01.jpg').default,
        position: 'right',
    },
    {
        id: 2,
        subTitle: 'WILD SALMON',
        title: 'CUTTING & DELIVERY',
        desc: 'We offer huge variety of execeptionally fresh meat farmed in our personal farm',
        imageUrl: require('@site/static/img/food/02.jpg').default,
        position: 'right',
    },
    {
        id: 3,
        subTitle: 'CUTTING & DELIVERY',
        title: 'QUALITY MONITORING',
        desc: 'We offer huge variety of execeptionally fresh meat farmed in our personal farm',
        imageUrl: require('@site/static/img/food/03.jpg').default,
        position: 'left',
    },
];
