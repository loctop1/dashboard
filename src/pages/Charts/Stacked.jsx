import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => {

    return (
        <div div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl" >
            <ChartsHeader category="Doanh Thu" title="Doanh thu sụt giảm" />
            <div className="w-full">
                <StackedChart />
            </div>
        </div >
    )
}
export default Stacked;