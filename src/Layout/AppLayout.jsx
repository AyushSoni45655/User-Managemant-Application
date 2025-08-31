import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Ui/Header'
import Footer from "./Ui/Footer"
const AppLayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default AppLayout
