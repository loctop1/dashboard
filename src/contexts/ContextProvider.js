import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
/**Tạo một context mới bằng cách sử dụng createContext(). Context được sử dụng để chia sẻ giá trị giữa các thành phần con mà không cần truyền qua props. */

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}
/**Định nghĩa một đối tượng initialState chứa các trạng thái khởi tạo ban đầu của ứng dụng. */

export const ContextProvider = ({ children }) => {
    /**Xuất ra một thành phần ContextProvider, nhận một prop là children (các thành phần con) để bao bọc bên trong context provider. */

    const [activeMenu, setActiveMenu] = useState(true);
    /**Sử dụng hook useState để tạo một trạng thái local activeMenu và một hàm setActiveMenu để cập nhật giá trị của nó. Giá trị khởi tạo là true. */

    const [isClicked, setIsClicked] = useState(initialState);

    //Reponsive
    const [screenSize, setScreenSize] = useState(undefined);

    // Màu sắc giao diện
    const [currentColor, setCurrentColor] = useState('#03C9D7');

    //Chức năng sáng tối
    const [currentMode, setCurrentMode] = useState('Light');

    const [themeSettings, setThemeSettings] = useState(false);

    //Chức năng sáng tối
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false)
    }

    // Màu sắc giao diện
    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        /**Hàm này được sử dụng để xử lý sự kiện click. */
        setIsClicked({ ...initialState, [clicked]: true })
        /**Dòng này sử dụng hàm setIsClicked để cập nhật trạng thái. Nó cập nhật trạng thái dựa trên trạng thái trước đó (initialState) bằng cách sao chép 
         * các thuộc tính của nó và ghi đè giá trị của thuộc tính có khóa bằng giá trị của tham số clicked thành true. */
    }
    /**Tác động tổng thể của hàm này là cập nhật trạng thái bằng cách đặt giá trị của thuộc tính đã được click là true trong khi đặt lại giá trị của tất cả 
     * các thuộc tính khác về giá trị ban đầu của chúng. */

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor,
                initialState
            }}>
            {/* Bao bọc tất cả các thành phần con bên trong context provider. Giá trị của activeMenu và setActiveMenu được chia sẻ thông qua context. */}
            {children}
            {/* Hiển thị tất cả các thành phần con được truyền vào ContextProvider.*/}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
/**Xuất ra một hàm useStateContext, sử dụng hook useContext để lấy giá trị từ context StateContext. Hàm này có thể được sử dụng trong bất kỳ thành phần nào 
 * muốn sử dụng các giá trị được chia sẻ từ context. */