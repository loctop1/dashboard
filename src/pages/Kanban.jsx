import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
    return (
        //Quản lý công việc
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Ứng Dụng" title="Quản Lý Công Việc" />
            <KanbanComponent
                id='kanban'
                dataSource={kanbanData} //Dữ liệu công việc
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
                keyField='Status'
            >
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) =>
                        <ColumnDirective key={index} {...item} />
                    )}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    )
}

export default Kanban