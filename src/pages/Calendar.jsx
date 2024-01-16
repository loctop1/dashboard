import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
    return (
        // Lịch kế hoạch
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Ứng Dụng" title="Lịch Kế Hoạch" />
            <ScheduleComponent
                height="650px"
                eventSettings={{ dataSource: scheduleData }} //Dữ liệu kế hoạch
                selectedDate={new Date(2021, 0, 10)} //Ngày thiết lập
            >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    )
}

export default Calendar