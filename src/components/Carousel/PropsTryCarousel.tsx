import React, {ReactNodeArray, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'bear-react-grid';
import Carousel, {
    IBearCarouselObj,
    TBearSlideItemDataList,
    BearSlideCard,
    IInfo,
    ICarouselState
} from 'bear-react-carousel';
import {anyToNumber} from 'bear-jsutils/convert';
import cx from 'classnames';
import {GridThemeProvider} from "bear-react-grid";
import gridConfig from "@site/src/config/grid";


import {Controller, useForm} from 'react-hook-form';
import {TextAreaField, TextField, SwitchControl} from '@bearests/form';
import {FormHorizontalGroup} from '@bearests/organize';
import {Button} from '@bearests/atom';
import {images} from './data';
import {isNotEmpty} from 'bear-jsutils/equal';
import {decodeToJson} from 'bear-jsutils/string';
import BrowserOnly from '@docusaurus/BrowserOnly';
import stateCarousel from "@site/src/components/Carousel/StateCarousel";


const SlideItemData: TBearSlideItemDataList = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideCard bgUrl={row.image} bgSize="cover"/>
    };
});



export interface IFormData {
    slidesPerView: number,
    slidesPerGroup: number,
    spaceBetween: number,
    aspectRatioWidth: number,
    aspectRatioHeight: number,
    addStaticHeight: string,
    staticHeight: number,
    isAutoMode: boolean,
    isStaticHeightMode: boolean,
    autoPlayTime: number,
    moveTime: number,
    isEnableLoop: boolean,
    isEnableNavButton: boolean,
    isEnablePagination: boolean,
    isEnableMouseMove: boolean,
    isEnableAutoPlay: boolean,
    isDebug: boolean,
    isMount: boolean,
}



const STORAGE_KEY = 'bear-react-carousel-props';

function getStorage(){
    return decodeToJson<{
        isExpend: boolean,
    } & IFormData>(localStorage.getItem(STORAGE_KEY) ?? '');
}

interface IProps {
    isLoadData: boolean,
}

/**
 * Props Try Carousel
 */
const PropsTryCarousel = ({
    isLoadData
}: IProps) => {
    // const prefixStorage = getStorage();
    const [controller, setController] = useState<Controller>();
    const [carouselState, setCarouselState] = useState<ICarouselState>();

    const [isExpend, toggleExpend] = useState<boolean>(true);
    const {control, watch, setValue, getValues} = useForm<IFormData>({
        defaultValues: {
            moveTime: 400,
            autoPlayTime: 3000,
            aspectRatioWidth: 40,
            aspectRatioHeight: 9,
            staticHeight: 200,
            isAutoMode: false,
            isStaticHeightMode: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            isEnableMouseMove: true,
            isEnableAutoPlay: false,
            isEnableNavButton: true,
            isEnablePagination: true,
            isEnableLoop: true,
            // ...prefixStorage,
            isMount: true,
        }
    });



    const isDebug = watch('isDebug');
    const isMount = watch('isMount');
    const isEnableLoop = watch('isEnableLoop');
    const isEnablePagination = watch('isEnablePagination');
    const isEnableNavButton = watch('isEnableNavButton');
    const isEnableMouseMove = watch('isEnableMouseMove');
    const isEnableAutoPlay = watch('isEnableAutoPlay');
    const isAutoMode = watch('isAutoMode');
    const isStaticHeightMode = watch('isStaticHeightMode');

    const slidesPerGroup = watch('slidesPerGroup');
    const slidesPerView = watch('slidesPerView');
    const spaceBetween = watch('spaceBetween');
    const aspectRatioWidth = watch('aspectRatioWidth');
    const aspectRatioHeight = watch('aspectRatioHeight');
    const addStaticHeight = watch('addStaticHeight');
    const staticHeight = watch('staticHeight');
    const autoPlayTime = watch('autoPlayTime');
    const moveTime = watch('moveTime');



    const handleGoPage = (index: number): void => {
        controller?.slideToActualIndex(index);
    };

    const getPageTotal = (): number => {
        return carouselState?.page.pageTotal?? 0;
    };



    useEffect(() => {
        if(isAutoMode === true){
            setValue('isStaticHeightMode',true);
        }
    }, [isAutoMode]);

    /**
     * 同步設定持久化
     */
    // useEffect(() => {
    //     const formData = getValues();
    //     localStorage.setItem(STORAGE_KEY,JSON.stringify({
    //         ...formData,
    //         isExpend,
    //     }));
    // }, []);



    /**
     * render Pagination control
     */
    const renderPaginationControl = () => {

        const pageTotal = getPageTotal();
        let pageEls: ReactNodeArray = [];

        if(pageTotal > 0){
            pageEls = new Array(pageTotal).fill('').map((row, index) => {
                return <Button color="primary" key={`page_${index}`}
                    className="m-1"
                    onClick={() => handleGoPage(index + 1)}>
                    {index + 1}
                </Button>;
            });
        }


        return <PagesBox>
            {pageEls}

            {/*<div className="flex-grow-1 justify-content-end d-flex">*/}
            {/*    <Button*/}
            {/*        color="info"*/}
            {/*        onClick={() => toggleExpend(prev => !prev)}*/}
            {/*        className="m-1"*/}
            {/*    >*/}
            {/*        {isExpend ? 'hide':'expend'}*/}
            {/*    </Button>*/}
            {/*</div>*/}


        </PagesBox>;
    };


    const renderSettingControl = () => {
        return  <Row>

            <Col md={12}>
                <FormHorizontalGroup label="isMount" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isMount"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="isDebug" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isDebug"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="enableLoop" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isEnableLoop"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="enablePagination"  labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isEnablePagination"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="enableNavButton" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isEnableNavButton"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>


            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="enableMouseMove" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isEnableMouseMove"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="enableAutoPlay" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isEnableAutoPlay"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>

            </Col>


            <Col md={12}>
                <FormHorizontalGroup label="slidesPerGroup" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="slidesPerGroup"
                        render={({field}) => {
                            return (<TextField
                                type="number"
                                {...field}
                            />);
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="spaceBetween" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="spaceBetween"
                        render={({field}) => {
                            return (<TextField
                                type="number"
                                {...field}
                            />);
                        }}
                    />
                </FormHorizontalGroup>

            </Col>

            <Col md={12}>
                <FormHorizontalGroup label="autoPlayTime" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="autoPlayTime"
                        render={({field}) => {
                            return (<TextField
                                type="number"
                                {...field}
                            />);
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
            <Col md={12}>
                <FormHorizontalGroup label="moveTime" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="moveTime"
                        render={({field}) => {
                            return (<TextField
                                type="number"
                                {...field}
                            />);
                        }}
                    />
                </FormHorizontalGroup>

            </Col>
        </Row>;
    };


    const renderCarousel = () => {

        let height: string|{widthRatio: number, heightRatio: number, addStaticHeight: string} = isStaticHeightMode && isNotEmpty(staticHeight) ? `${staticHeight}px` : undefined
        if(!height){
            height = !isStaticHeightMode && aspectRatioWidth > 0 && aspectRatioHeight > 0 ? {widthRatio: aspectRatioWidth, heightRatio: aspectRatioHeight, addStaticHeight: addStaticHeight}: undefined
        }

        return <Carousel
            setController={setController}
            onSlideChange={setCarouselState}

            // setCarousel={handleSetCarousel}
            data={SlideItemData}
            isDebug={isDebug}
            isEnablePagination={isEnablePagination}
            isEnableMouseMove={isEnableMouseMove}
            isEnableNavButton={isEnableNavButton}
            isEnableLoop={isEnableLoop}
            isEnableAutoPlay={isEnableAutoPlay}
            slidesPerView={isAutoMode ? 'auto' : anyToNumber(slidesPerView, 1)}
            slidesPerGroup={anyToNumber(slidesPerGroup, 1)}
            spaceBetween={anyToNumber(spaceBetween)}
            autoPlayTime={anyToNumber(autoPlayTime)}
            moveTime={anyToNumber(moveTime)}
            height={height}
            // breakpoints={{
            //     768: {
            //         slidesPerView: 2,
            //         isEnableLoop: false,
            //         isEnablePagination: false,
            //         isEnableNavButton: false,
            //     },
            //     1200: {
            //         slidesPerView: 1,
            //         isEnableLoop: true,
            //         isEnablePagination: true,
            //         isEnableNavButton: true,
            //     }
            // }}
        />;
    };


    const renderPageControl = () => {
        return <PageControlBox className={cx({'d-none': !isExpend})}>

            <Col md={12}>
                <FormHorizontalGroup label="isAutoMode" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isAutoMode"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>
            </Col>

            <Col md={12}>
                <FormHorizontalGroup label="slidesPerView" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="slidesPerView"
                        render={({field}) => {
                            return (<TextField
                                type="number"
                                placeholder="1"
                                disabled={isAutoMode}
                                {...field}
                            />);
                        }}
                    />
                </FormHorizontalGroup>

            </Col>

            <Col md={12}>
                <FormHorizontalGroup label="staticHeightMode" labelCol={12} formCol={12}>
                    <Controller
                        control={control}
                        name="isStaticHeightMode"
                        render={({field}) => {
                            return <SwitchControl
                                {...field}
                                disabled={isAutoMode}
                                checked={field.value}
                            />;
                        }}
                    />
                </FormHorizontalGroup>
            </Col>
            <Col md={12}>
                {isStaticHeightMode && (
                    <FormHorizontalGroup label="staticHeight" labelCol={12} formCol={12}>
                        <Controller
                            control={control}
                            name="staticHeight"
                            render={({field}) => {
                                return (<TextField
                                    type="number"
                                    {...field}
                                />);
                            }}
                        />
                    </FormHorizontalGroup>
                )}

                {!isStaticHeightMode && (<>
                    <FormHorizontalGroup label="aspectRatio" labelCol={12} formCol={12}>
                        <Controller
                            control={control}
                            name="aspectRatioWidth"
                            render={({field}) => {
                                return (<TextField
                                    type="number"
                                    {...field}
                                />);
                            }}
                        />
                        <Controller
                            control={control}
                            name="aspectRatioHeight"
                            render={({field}) => {
                                return (<TextField
                                    type="number"
                                    {...field}
                                />);
                            }}
                        />
                    </FormHorizontalGroup>
                    <FormHorizontalGroup label="addStaticHeight" labelCol={12} formCol={12}>

                        <Controller
                            control={control}
                            name="addStaticHeight"
                            render={({field}) => {
                                return (<TextField
                                    type="text"
                                    placeholder="1px"
                                    {...field}
                                />);
                            }}
                        />
                    </FormHorizontalGroup>

                </>
                )}

            </Col>
        </PageControlBox>;
    };


    return <BrowserOnly>
        {() => {
            return <GridThemeProvider gridTheme={gridConfig}>
                <Row className="mb-1">
                    {isMount && (
                        <Col xl={24} >
                            <Row>
                                <Col col={24} className="mb-4">
                                    {renderCarousel()}
                                </Col>
                                <Col col={24}>
                                    {renderPaginationControl()}

                                </Col>
                            </Row>
                        </Col>
                    )}

                    <Col lg={24} xl={24} className={cx( {'d-none': !isExpend})}>

                        {renderPageControl()}

                        {renderSettingControl()}
                    </Col>


                    <Col lg={24} xl className="mb-4">
                <pre>
                    {JSON.stringify(carouselState, null, '\t')}
                </pre>

                        {/*    <TextAreaField id="console"/>*/}
                    </Col>

                </Row>
            </GridThemeProvider>
        }}
    </BrowserOnly>;

};

export default PropsTryCarousel;




const PageControlBox = styled.div`
  padding: 8px;
  border: 1px dotted #00a3e0;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  margin-bottom: 20px;
`;


const PagesBox = styled.div`
  padding: 8px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  margin-bottom: 20px;
`;

