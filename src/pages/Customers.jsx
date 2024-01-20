import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
    return (
        // Quản trị người dùng
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Trang" title="Quản trị người dùng" />
            <GridComponent
                dataSource={customersData} //Dữ liệu nhân viên
                allowPaging //Phân trang
                allowSorting //Bộ lọc sắp xếp
                toolbar={['Delete']} //Chức năng tìm kiếm
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width="auto"
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div >
    )
}

export default Customers