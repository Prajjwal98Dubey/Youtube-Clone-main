import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { HAMBURGER_MENU, USER_LOGO, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from './constants'
import { Link } from 'react-router-dom'

const Header = () => {
   const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
  const[searchQuery,setSeachQuery] = useState("");
   useEffect(()=>{
       const timer = setTimeout(() => {
        getYoutubeSuggetions();
       }, 3000);
       return()=>{
         clearTimeout(timer)
       }
   },[searchQuery])

   const getYoutubeSuggetions=async()=>{
    console.log("API CALL - " + searchQuery)
    const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json= await data.json()
   }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-8 cursor-pointer' src={HAMBURGER_MENU} onClick={()=>toggleMenuHandler()} alt="hamburger"/>
           <a href="/"><img className='h-8 mx-2 cursor-pointer' src={YOUTUBE_LOGO} alt="logo"/></a>
        </div>
        <div className='col-span-10 px-10'>
            <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" value={searchQuery} onChange={(e)=>setSeachQuery(e.target.value)} />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔎</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8 cursor-pointer' src={USER_LOGO} alt="user" />
        </div>
    </div>
  )
}

export default Header

// 1.31.43