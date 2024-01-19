import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {

    const { currentMode } = useStateContext();

    return (
        // Biểu đồ
        <ChartComponent
            width={width}
            height={height}
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            /**đặt các thuộc tính chính cho trục x và trục y */
            chartArea={{ border: { width: 0 } }}
            /**đặt các thuộc tính cho khu vực của biểu đồ, trong trường hợp này, không có đường biên (border: { width: 0 }) */
            tooltip={{ enable: true }}
            /**được kích hoạt để hiển thị tooltip khi di chuột qua các điểm trên biểu đồ. */
            legendSettings={{ background: 'white' }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            {/* Chèn các dịch vụ vào biểu đồ */}
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {/* Là một container cho danh sách các loại dữ liệu biểu đồ (Series). */}
                {stackedCustomSeries.map((item, index) =>
                    <SeriesDirective key={index} {...item} />
                )}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Stacked