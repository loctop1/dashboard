import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => (
    // Biểu đồ tròn
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
        <ChartsHeader category="Biểu Đồ Tròn" title="Phân tích chi phí dự án" />
        <div className="w-full">
            <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
        </div>
    </div>
);

export default Pie;