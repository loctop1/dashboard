import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
// Context API
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  // Chức năng đóng mở Menu Sidebar
  const { activeMenu, setActiveMenu, screenSize, currentColor, currentMode } = useStateContext();

  //Chức năng đóng sidebar khi reponsive
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      /**Điều kiện kiểm tra xem giá trị của biến screenSize có nhỏ hơn hoặc bằng 900 không. */
      setActiveMenu(false);
      /**Nếu cả hai điều kiện ở trên đều đúng, dòng này sẽ được thực hiện. Hàm setActiveMenu được gọi để đặt giá trị của biến activeMenu thành false, có vẻ 
       * như để đóng thanh bên. */
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div
      className='
        ml-3
        h-screen
        md:overflow-hidden
        overflow-auto
        md:hover:overflow-auto
        pb-10
      '
    >
      {
        activeMenu && (
          <>
            <div className={`flex justify-between items-center ${currentMode === 'Dark' ? 'dark:bg-secondary-dark-bg' : 'bg-white'} sticky top-0`}>
              <Link
                to='/'
                onClick={handleCloseSideBar}
                className='
                  items-center
                  gap-3
                  ml-3
                  mt-4
                  flex
                  text-xl
                  font-semibold
                  tracking-tight
                  dark:text-white
                  text-slate-900
                '
              >
                <SiShopware /> <span>Nguyễn Tuấn Lộc</span>
              </Link>
              <TooltipComponent content="Đóng" position='BottomCenter'>
                <button
                  type='button'
                  onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                  /*Khi nút được nhấn, nó sẽ gọi hàm setActiveMenu với một hàm lambda. Hàm lambda này thực hiện việc đảo ngược giá trị trạng thái trước đó 
                  (prevActiveMenu). */
                  className={`
                    text-xl 
                    rounded-full p-3 
                    ${currentMode === 'Dark' ? 'text-white' : 'text-black'}
                    ${currentMode === 'Dark' ? 'hover:text-white' : 'hover:text-white'}  
                    ${currentMode === 'Dark' ? 'hover:bg-red-700' : 'hover:bg-neutral-950'}
                    mt-4 
                    block
                  `
                  }
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className='mt-10'>
              {links.map((item) => (
                <div key={item.title} >
                  <p className='text-gray-600 m-3 mt-4 uppercase font-medium'>
                    {item.title}
                  </p>
                  {item.links.map((Link) => (
                    <NavLink
                      to={`/${Link.name}`}
                      key={Link.name}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) => isActive ? activeLink : normalLink}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : ''
                      })}
                    >
                      {Link.icon}
                      <span className='capitalize'>
                        {Link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )
      }
    </div >
  )
}

export default Sidebar