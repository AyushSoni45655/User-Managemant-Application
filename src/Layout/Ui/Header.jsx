import React from 'react'
import "../../index.css";
import { NavLink } from 'react-router-dom'
const Header = () => {
  return <header className='w-full h-auto border-1 border-transparent '>
    <div className='w-[90%] h-auto p-2 m-auto flex flex-col sm:flex-row md:flex-row items-center justify-between'style={{boxShadow:"var(--nav-shadow)"}}>
      <h1 style={{fontFamily:"var(--logo-font)"}}className='font-bold text-xl text-white'>Ayush Soni</h1>
      <nav className='flex flex-row gap-32 sm:gap-20 md:gap-20' style={{fontFamily:"var(--navs-font)"}}>
        <NavLink to={"/"}><h1 className='font-bold text-lg text-white'>Home</h1></NavLink>
        <NavLink to={"/about"}><h1 className='font-bold text-lg text-white'>About</h1></NavLink>
      </nav>
    </div>
    
  </header>
}

export default Header
