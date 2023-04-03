import React from 'react'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import Sidebars from './Sidebars'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebars/>
        <Outlet/>
    </div>
  )
}

export default Body