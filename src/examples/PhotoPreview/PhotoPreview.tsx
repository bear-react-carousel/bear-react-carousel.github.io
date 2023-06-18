import React, {useState} from 'react';
import gridConfig from "@site/src/config/grid";
import {GridThemeProvider} from 'bear-react-grid';
import BrowserOnly from "@docusaurus/BrowserOnly";

// Components
import PreviewImageCarousel from './_components/PreviewImageCarousel';
import FileCard from './_components/FileCard';

import {data} from './data';



/**
 * TabCarousel
 */
const PhotoPreview = () => {
    const [visibleIndex, setVisibleIndex] = useState<number|undefined>(undefined);

    return <GridThemeProvider gridTheme={gridConfig}>
        <BrowserOnly>
            {() => {
                return <div style={{width: '375px'}}>
                    {data.map((row, index) => {
                        return <FileCard
                            key={row.id}
                            name={row.fileName}
                            thumbUrl={row.thumbUrl}
                            onPreview={() => setVisibleIndex(index)}
                        />
                    })}


                    {typeof visibleIndex !== 'undefined' &&
                        <PreviewImageCarousel
                            activeIndex={visibleIndex}
                            onClose={() => setVisibleIndex(undefined)}
                        />
                    }
                </div>
            }}
        </BrowserOnly>
    </GridThemeProvider>
};

export default PhotoPreview;

