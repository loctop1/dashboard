import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

//Chức năng thay đổi màu
const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  /**Dòng này sử dụng document.getElementById('preview') để chọn phần tử HTML có id là 'preview'.
   * Sau đó, nó thay đổi thuộc tính backgroundColor của phần tử này thành giá trị màu được lấy từ args.currentValue.hex.
   * Điều này giả sử args là một đối tượng có thuộc tính currentValue và currentValue lại là một đối tượng có thuộc tính hex, đại diện cho giá trị màu hex.
   */
}

const ColorPicker = () => {
  return (
    //Phối màu
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Ứng Dụng" title="Phối Màu" />
      <div className='text-center'>
        <div id='preview' />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>
              Bảng Màu Nội Tuyến
            </p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change} //Chức năng thay đổi màu
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>
              Bộ Chọn Nội Tuyến
            </p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change} //Chức năng thay đổi màu
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker