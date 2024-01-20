import React, { useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
    <div className="w-40 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="150px" />
    </div>
);


const ECommerce = () => {

    //Chức năng đổi màu giao diện
    const { currentColor, currentMode } = useStateContext();

    return (
        <div className='mt-24'>
            {/* Homepage */}
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div
                    className='
                        bg-white 
                        dark:text-gray-200 
                        dark:bg-secondary-dark-bg 
                        h-44 rounded-xl 
                        w-full 
                        lg:w-80
                        p-8 
                        pt-9 
                        m-3                 
                        bg-no-repeat 
                        bg-cover 
                        bg-center
                    '
                >
                    <div className=' flex justify-between items-center'>
                        <div>
                            <p className={`font-semibold ${currentMode === 'Dark' ? 'dark:text-gray-200' : 'text-gray-600'}  text-xl`}>Thu nhập</p>
                            <p className='text-2xl'>$63,448.78</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <Button color="white" bgColor={currentColor} text="Tải xuống" borderRadius="10px" size="md" />
                    </div>
                </div>
                <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                    {earningData.map((item) => (
                        <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                            <button type='button' className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' style={{ color: item.iconColor, backgroundColor: item.iconBg }}>
                                {item.icon}
                            </button>
                            <p className='mt-3'>
                                <span className='text-lg font-semibold'>
                                    ${item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className={`text-sm ${currentMode === 'Dark' ? 'dark:text-gray-200' : 'text-gray-600'} mt-1`}>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-10 flex-wrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>Cập nhật doanh thu</p>
                        <div className='flex items-center gap-4'>
                            <p className={`flex items-center gap-2 ${currentMode === 'Dark' ? 'dark:text-gray-200' : 'text-gray-600'} hover:drop-shadow-xl`}>
                                <span>
                                    <GoDotFill />
                                </span>
                                <span>Chi phí</span>
                            </p>
                            <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                                <span>
                                    <GoDotFill />
                                </span>
                                <span>Ngân sách</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold'>$93,438</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-500 ml-3 text-sm'>
                                        23%
                                    </span>
                                </p>
                                <p className={`${currentMode === 'Dark' ? 'dark:text-gray-200' : 'text-gray-600'} mt-1`}>
                                    Ngân sách
                                </p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-3xl font-semibold'>$48,487</span>
                                </p>
                                <p className={`${currentMode === 'Dark' ? 'dark:text-gray-200' : 'text-gray-600'} mt-1`}>
                                    Chi phí
                                </p>
                            </div>

                            {/* Biểu đồ báo cáo */}
                            <div className='mt-5'>
                                <SparkLine
                                    currentColor={currentColor}
                                    id="line-sparkline"
                                    type="Line"
                                    height="80px"
                                    width="250px"
                                    data={SparklineAreaData}
                                    color={currentColor}
                                />
                            </div>
                            <div className='mt-10'>
                                <Button color="white" bgColor={currentColor} text="Xuất báo cáo" borderRadius="10px" />
                            </div>
                        </div>
                        <div>
                            <Stacked width="380px" height="360px" />
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className=" rounded-2xl md:w-400 p-4 m-3"
                        style={{ backgroundColor: currentColor }}
                    >
                        <div className="flex justify-between items-center ">
                            <p className="font-semibold text-white text-2xl">Thu Nhập</p>

                            <div>
                                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                                <p className="text-gray-200">Doanh thu hàng tháng</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                        </div>
                    </div>

                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-7">
                        <div>
                            <p className="text-2xl font-semibold ">$43,246</p>
                            <p className="text-gray-400">Doanh thu hàng năm</p>
                        </div>

                        <div className="w-40">
                            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 m-4 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-xl font-semibold">Giao dịch gần đây</p>
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="mt-10 w-72 md:w-400">
                        {recentTransactions.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{
                                            color: item.iconColor,
                                            backgroundColor: item.iconBg,
                                        }}
                                        className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                        <div className="mt-3">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Thêm Giao Dịch"
                                borderRadius="10px"
                            />
                        </div>

                        <p className="text-gray-400 text-sm">36 Giao dịch gần đây</p>
                    </div>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Tổng quan về doanh số bán hàng</p>
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="md:w-full overflow-auto">
                        <LineChart />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Thống kê hàng tuần</p>
                        <button type="button" className="text-xl font-semibold text-gray-500">
                            <IoIosMore />
                        </button>
                    </div>

                    <div className="mt-10 ">
                        {weeklyStats.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4 w-full">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{ background: item.iconBg }}
                                        className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>

                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                        <div className="mt-4">
                            <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                        </div>
                    </div>

                </div>
                <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Thương hiệu MedicalPro</p>
                        <button type="button" className="text-xl font-semibold text-gray-400">
                            <IoIosMore />
                        </button>
                    </div>
                    <p className="h-auto text-ms text-center cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-auto bg-orange-400 py-0.5 px-2 text-white mt-10">
                        Ngày 16 tháng 4 năm 2023
                    </p>

                    <div className="flex gap-4 border-b-1 border-color mt-6">
                        {medicalproBranding.data.map((item) => (
                            <div key={item.title} className="w-80 border-r-1 border-color pr-4 pb-2 text-center">
                                <p className="text-xs text-gray-400">{item.title}</p>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-b-1 border-color pb-4 mt-2">
                        <p className="text-md font-semibold mb-2">Nhóm</p>

                        <div className="flex gap-4">
                            {medicalproBranding.teams.map((item) => (
                                <p
                                    key={item.name}
                                    style={{ background: item.color }}
                                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                                >
                                    {item.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="text-md font-semibold mb-2">Người Lãnh Đạo</p>
                        <div className="flex gap-4">
                            {medicalproBranding.leaders.map((item, index) => (
                                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                        <div className="mt-3">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Thêm Giao Dịch"
                                borderRadius="10px"
                            />
                        </div>

                        <p className="text-gray-400 text-sm">36 Giao dịch gần đây</p>
                    </div>
                </div>
                <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Các hoạt động hàng ngày</p>
                        <button type="button" className="text-xl font-semibold text-gray-500">
                            <IoIosMore />
                        </button>
                    </div>
                    <div className="mt-10">
                        <img
                            className="md:w-96 h-50 "
                            src={product9}
                            alt=""
                        />
                        <div className="mt-8">
                            <p className="font-semibold text-lg">React 19 sắp ra mắt!</p>
                            <p className="text-gray-400 ">Bởi Jordan Walke</p>
                            <p className="mt-2 text-sm text-gray-400">
                                Đây sẽ là mô tả nhỏ cho tin tức bạn đã hiển thị ở đây. Có thể có một số thông tin tuyệt vời.
                            </p>
                            <div className="mt-3">
                                <Button
                                    color="white"
                                    bgColor={currentColor}
                                    text="Đọc Thêm"
                                    borderRadius="10px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ECommerce;