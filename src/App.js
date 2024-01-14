import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { ECommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
// Context API
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();

    return (
        <>
            <div>
                <BrowserRouter>
                    <div className='flex relative dark:bg-main-dark-bg'>
                        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                            {/* Nút cài đặt */}
                            <TooltipComponent content="Cài đặt" position='Top'>
                                <button
                                    type="button"
                                    className='
                                        text-3xl
                                        p-3
                                        hover:drop-shadow-xl
                                        hover:bg-light-gray
                                        text-white
                                    '
                                    style={{ background: 'blue', borderRadius: '50%' }}
                                >
                                    <FiSettings />
                                </button>
                            </TooltipComponent>
                        </div>
                        {/* Menu sidebar */}
                        {
                            activeMenu ? (
                                <div
                                    className='
                                        w-72
                                        fixed
                                        sidebar
                                        dark:bg-secondary-dark-bg
                                        bg-white
                                    '
                                >
                                    <Sidebar />
                                </div>
                            ) : (
                                <div
                                    className='
                                        w-0
                                        dark:bg-secondary-dark-bg
                                    '
                                >
                                    <Sidebar />
                                </div>
                            )
                        }
                        <div
                            className={
                                `
                                    dark:bg-main-dark-bg 
                                    bg-main-bg 
                                    min-h-screen 
                                    w-full 
                                    ${activeMenu ? 'md:ml-72' : ' flex-2'}
                                `
                            }
                        >
                            {/* Navbar */}
                            <div
                                className='
                                    fixed
                                    md:static
                                    bg-main-bg
                                    dark:bg-main-dark-bg
                                    navbar
                                    w-full
                                '
                            >
                                <Navbar />
                            </div>

                            {/* Menu chính */}
                            <div>
                                <Routes>
                                    {/* Trang quản trị */}
                                    <Route path='/' element={<ECommerce />} />
                                    <Route path='/Thống kê' element={<ECommerce />} />

                                    {/* Trang */}
                                    <Route path='/Đơn Hàng' element={<Orders />} />
                                    <Route path='/Khách Hàng' element={<Employees />} />
                                    <Route path='/Quản Trị Người Dùng' element={<Customers />} />

                                    {/* Tính năng */}
                                    <Route path='/Quản Lý Công Việc' element={<Kanban />} />
                                    <Route path='/Soạn Thảo' element={<Editor />} />
                                    <Route path='/Kế Hoạch' element={<Calendar />} />
                                    <Route path='/Phối Màu' element={<ColorPicker />} />

                                    {/* Biểu đồ */}
                                    <Route path='/Tỷ Lệ' element={<Line />} />
                                    <Route path='/Diện Tích' element={<Area />} />
                                    <Route path='/Biểu Đồ Cột' element={<Bar />} />
                                    <Route path='/Biểu Đồ Tròn' element={<Pie />} />
                                    <Route path='/Dữ Liệu Tài Chính' element={<Financial />} />
                                    <Route path='/Biểu Đồ Màu' element={<ColorMapping />} />
                                    <Route path='/Kim Tự Tháp' element={<Pyramid />} />
                                    <Route path='/stacked' element={<Stacked />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter >
            </div >
        </>
    )
}

export default App;