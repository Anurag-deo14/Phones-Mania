import React from 'react'
import { useState, useEffect } from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import logo0 from '../../src/assets/Logo0.png'

const yoboi = {
  height:"50px"
}

const NavbarItem = ( {title, classprops}) => {
   return(
    <li className={`mx-4 cursor-pointer ${classprops}`}>
        {title}
    </li>
   )
}
const Navbar = () => {
    const[toggleMenu, setToggleMenu]=React.useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 fixed z-50 " style={{backgroundImage:"linear-gradient(to right, rgb(16, 15, 21) 25%, rgb(47, 62, 106)57%, rgb(114, 39, 65) 90%)", boxShadow:"2px 2px 5px 3px #1A1110"}}>
     <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo0} className="cursor-pointer" style={yoboi}/>
     </div>
     <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
       {/* {["Donate","Our Mission","The Need","Countries"].map((item,index) => (
         <NavbarItem key={item+index} title={item}/>
       ))} */}
       <a href="#welcome" className='mx-4 cursor-pointer'>Home</a>
       <a href="#services" className='mx-4 cursor-pointer'>Services</a>
       <a href="#need" className='mx-4 cursor-pointer'>Need</a>
       <a href="#transactions" className='mx-4 cursor-pointer'>Transactions</a>
       <a href="#map" className='mx-4 cursor-pointer'>Map</a>
       <a href="#team" className='mx-4 cursor-pointer'>Team</a>
     </ul>
     <div className='flex relative'>
        {
            toggleMenu 
            ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/> 
            : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
           <ul
           className='z-10 fixed top-0 -right-2 p-8 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in'
           >
            <li className='text-xl w-full my-2 cursor-pointer'>
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <a href="#welcome" className='m-4 cursor-pointer'>Home</a>
       <a href="#services" className='m-4 cursor-pointer'>Services</a>
       <a href="#need" className='m-4 cursor-pointer'>Need</a>
       <a href="#transactions" className='m-4 cursor-pointer'>Transactions</a>
       <a href="#map" className='m-4 cursor-pointer'>Map</a>
       <a href="#team" className='m-4 cursor-pointer'>Team</a>
           </ul> 
        )}
     </div>
    </nav>
  )
}

export default Navbar
