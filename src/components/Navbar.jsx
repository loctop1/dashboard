import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' style={{ background: dotColor }} />
      {icon}
    </button>
  </TooltipComponent >
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setScreenSize } = useStateContext();

  //Reponsive
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    /**Hàm handleResize sẽ cập nhật giá trị screenSize bằng chiều rộng hiện tại của cửa sổ */
    window.addEventListener('resize', handleResize);
    /**Thêm một sự kiện lắng nghe resize để gọi hàm handleResize khi cửa sổ thay đổi kích thước */
    handleResize();
    /**Gọi hàm handleResize ngay khi component được mount để có giá trị ban đầu của screenSize */
    return () => window.removeEventListener('resize', handleResize);
    /**Loại bỏ sự kiện lắng nghe khi component bị unmount để tránh memory leak */
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
    /**nếu screenSize nhỏ hơn hoặc bằng 900, đặt activeMenu thành false, ngược lại đặt thành true */
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />
      <div className='flex'>
        <NavButton title='Giỏ hàng' customFunc={() => handleClick('cart')} color="blue" icon={<FiShoppingCart />} />
        <NavButton title='Tin nhắn' dotColor="#03C9D7" customFunc={() => handleClick('chat')} color="blue" icon={<BsChatLeft />} />
        <NavButton title='Thông báo' dotColor="red" customFunc={() => handleClick('notification')} color="blue" icon={<RiNotification3Line />} />
        <TooltipComponent content="Hồ sơ" position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
            <img src={avatar} alt="" className='rounded-full w-8 h-8' />
            <p>
              <span className='text-black text-14'>Xin chào, </span> {''}
              <span className='text-black font-medium ml-1 text-base'>Nguyễn Tuấn Lộc</span>
            </p>
            <MdKeyboardArrowDown className='text-black text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar