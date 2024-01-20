import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
    return (
        // Danh sách khách hàng
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Trang" title="Danh sách nhân viên" />
            <GridComponent
                dataSource={employeesData} //Dữ liệu khách hàng
                allowPaging //Phân trang
                allowSorting //Bộ lọc sắp xếp
                toolbar={['Search']} //Chức năng tìm kiếm
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Employees;