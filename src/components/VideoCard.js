import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;


    return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="video" />
            <h2 className='font-bold py-2'>{title}</h2>
            <h4>{channelTitle}</h4>
            <h5>{statistics.viewCount}</h5>
        </div>
    )
}

export default VideoCard