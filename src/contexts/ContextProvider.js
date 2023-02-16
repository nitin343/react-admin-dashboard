import React, { createContext, useContext, useState } from 'react'



const StateContext = createContext();

const initalState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = (({children}) => {

    const [activeMenu , setActiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initalState)
    const [screenSize, setscreenSize] = useState(undefined)
    const handleClick = (clicked) => setisClicked({...initalState, [clicked]: true})

    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked, setisClicked, screenSize, setscreenSize}}>
              {children}
        </StateContext.Provider>
    )
})

export const useStateContext = () => useContext(StateContext)