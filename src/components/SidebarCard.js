import React from 'react'

const SidebarCard = ({detail}) => {
    const { snippet, statistics } = detail;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-80 shadow-md flex'>
        <div>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="video" />
        </div>
        <div>
            <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
            </ul>
            </div>
    </div>
  )
}

export default SidebarCard