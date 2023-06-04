import {IRules} from "@site/src/examples/VipLevelCarousel/_components/VipLevelCard";

interface IVIPData {
    level: number,
    totalAmount: number,
    rule: IRules[],
}

export const vipData: IVIPData[] = new Array(12).fill('').map((row, index) => {
    return {
        level: index,
        totalAmount: 100 * index,
        rule: [
            {title: 'Rem', value: 200 * index, hasUpTo: true,},
            {title: 'Cache', value: 120 * index, hasUpTo: true,}
        ],
    };
});


export const levelOption = vipData.map((row, index) => {
    return {
        text: `LV ${row.level}`,
        value: String(index),
    };
});
