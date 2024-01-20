import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
    const { currentMode } = useStateContext();

    return (
        //Diện tích
        <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
            <ChartsHeader category="Diện Tích" title="Tỷ lệ lạm phát tính bằng phần trăm" />
            <div className="w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                >
                    <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                    <SeriesCollectionDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Area;