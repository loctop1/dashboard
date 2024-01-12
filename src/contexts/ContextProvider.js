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

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
            {/* Bao bọc tất cả các thành phần con bên trong context provider. Giá trị của activeMenu và setActiveMenu được chia sẻ thông qua context. */}
            {children}
            {/* Hiển thị tất cả các thành phần con được truyền vào ContextProvider.*/}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
/**Xuất ra một hàm useStateContext, sử dụng hook useContext để lấy giá trị từ context StateContext. Hàm này có thể được sử dụng trong bất kỳ thành phần nào 
 * muốn sử dụng các giá trị được chia sẻ từ context. */