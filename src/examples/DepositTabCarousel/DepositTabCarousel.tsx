import React, {useState} from 'react';
import gridConfig from "@site/src/config/grid";
import {GridThemeProvider} from 'bear-react-grid';

// Components
import BrowserOnly from "@docusaurus/BrowserOnly";
import {apiData, EGroupCode, EMethodCode, groupConfig, methodConfig} from '@site/src/examples/DepositTabCarousel/data';
import {IData} from '@site/src/examples/DepositTabCarousel/types';
import DepositCarousel from '@site/src/examples/DepositTabCarousel/_components/DepositCarousel';
import {groupBy} from '@site/src/examples/DepositTabCarousel/utils';




/**
 * TabCarousel
 */
const DepositTabCarousel = () => {
    const [groupCode, setGroupCode] = useState<EGroupCode>();
    const [methodCode, setMethodCode] = useState<EMethodCode>();



    const groupGroupData = groupBy(apiData, row => row.groupCode);
    const groupList: IData[] = Object.keys(groupGroupData).map(groupCode => {
        return {
            code: groupCode,
            name: groupConfig[groupCode].name,
            iconUrl: groupConfig[groupCode].image,
        }
    }, []);

    const methodList: IData[] = groupGroupData[groupCode]?.map(row => {
        return {
            code: row.code,
            name: methodConfig[row.code].name,
            iconUrl: methodConfig[row.code].image,
        }
    });


    const handleOnChangeGroupCode = (code: EGroupCode) => {
        setGroupCode(code);
        setMethodCode(undefined);
    }
    const handleOnChangeMethodCode = (code: EMethodCode) => {
        setMethodCode(code);
    }


    return <GridThemeProvider gridTheme={gridConfig}>
        <BrowserOnly>
            {() => {
                return <div style={{width: '375px'}}>
                    <DepositCarousel
                        data={groupList}
                        activeCode={groupCode}
                        onChange={handleOnChangeGroupCode}
                    />

                    <DepositCarousel
                        data={methodList}
                        activeCode={methodCode}
                        onChange={handleOnChangeMethodCode}
                    />
                </div>
            }}
        </BrowserOnly>
    </GridThemeProvider>
};

export default DepositTabCarousel;

