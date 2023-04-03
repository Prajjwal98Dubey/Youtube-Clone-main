import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import ShimmerWatch from './ShimmerWatch';
import SideBar from './SideBar';
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';
const WatchPage = () => {
    const [searchParam] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='flex'>
            <div className='flex-col'>
                
                    <iframe className='mx-5 my-5' width="1000" height="450" src={"https://www.youtube.com/embed/" + searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <div className='m-1 font-bold px-2 w-fit'>
                <CommentSection/>
            </div>
            </div>
            <div><SideBar/></div>
            
        </div>
    )
}

export default WatchPage