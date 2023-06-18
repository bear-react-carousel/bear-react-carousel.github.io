export interface ITaskFilesQuery {
    id: string,
    thumbUrl?: string | null,
    createdAt: string,
    fileName: string,
    fileSize: string,
}


export const data: ITaskFilesQuery[] = [
    {
        id: '01h34ca9v94k026dte3bfczx5s',
        thumbUrl: '/img/racing/01.jpg',
        createdAt: '2023-06-17 17:52:23',
        fileSize: '1,123KB',
        fileName: 'CleanShot 2023-06-17.png',
    },
    {
        id: '01h34ca9v94k026dte3bfczx5s',
        thumbUrl: '/img/racing/02.jpg',
        fileName: 'CleanShot 2023-06-18.png',
        fileSize: '788KB',
        createdAt: '2023-06-17 17:52:23',
    },
    {
        id: '01h34ca9v94k026dte3bfczx5s',
        thumbUrl: '/img/racing/03.jpg',
        fileName: 'CleanShot 2023-06-19.png',
        fileSize: '1,280KB',
        createdAt: '2023-06-17 17:52:23',
    }
];
