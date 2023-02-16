import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { useStateContext } from '../contexts/ContextProvider';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import{ Cart, cart, chat, Notification, UserProfile } from '.';


const NavButton = ({title, customFunc, icon, color, dotColor}) => {
  return (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray" >
      <span style={{background:dotColor }} className="rounded-full w-2 h-2 right-2 top-2 absolute  inline-flex" />{icon}
    </button>
  </TooltipComponent>
  )
}

const Navbar = () => {
   const {activeMenu, setActiveMenu,isClicked , setIsClicked, handleClick, screenSize, setscreenSize} = useStateContext();
  

   useEffect(() => {
      const handleReszie = () => setscreenSize(window.innerWidth)
      window.addEventListener('resize', handleReszie) 

      handleReszie();

      return () => window.removeEventListener('resize', handleReszie);

   },[])


   useEffect(() => {
     if(screenSize <= 900){
      setActiveMenu(false)
     }else{
      setActiveMenu(true)
     }
   },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton  title='Menu' customFunc={() =>  setActiveMenu((preActiveMenu) =>  !preActiveMenu)} color='blue' icon={<AiOutlineMenu />} />
        <div className='flex' >
        <NavButton  title='cart' dotColor='#03c907'  customFunc={() =>  handleClick('cart')} color='blue' icon={<FiShoppingCart />} />
        <NavButton  title='Chat' dotColor='#03c907' customFunc={() =>  handleClick('Chat')} color='blue' icon={<BsChatLeft />} />
        <NavButton  title='Notification' dotColor='#03c907' customFunc={() =>  handleClick('notification')} color='blue' icon={<RiNotification3Line />} />
        <TooltipComponent content='Profile' position='BottomCenter' >
          <div className='flex items-center gap-2 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')} >
            <img className='rounded-full w-8 h-8' src={avatar} />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14' >Niteen</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart /> }
        {isClicked.chat && <Chat /> }
        {isClicked.notification && <Notification /> }
        {isClicked.userProfile && <UserProfile /> }
        </div>
    </div>
  )
}

export default Navbar