import React, { useEffect } from 'react'
import LiveChat from './LiveChat'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

const LivePage = () => {
  const dispatch=useDispatch()
 useEffect(()=>{
  dispatch(closeMenu())
 },[])
  return (
    <div className='flex ml-16'>
        <div className=''>
        <iframe width="850" height="450" src="https://www.youtube.com/embed/hQvTv4FiQrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div>
            <LiveChat/>
        </div>
    </div>
  )
}

export default LivePage