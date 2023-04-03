import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "./constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import MainShimmer from "./MainShimmer"

const VideoContainer=()=>{
    const[videos,setVideos]=useState([])
    const[isloading,setIsLoading]=useState(true)
    useEffect(()=>{
     getVideos()
    },[])

    const getVideos = async ()=>{
        const data= await fetch(YOUTUBE_VIDEOS_API)
        const json= await data.json()
        // console.log(json)
        setVideos(json.items)
        setIsLoading(false)
    }
    if(isloading===true) return <MainShimmer/>
    return (
        <div className="flex flex-wrap"> 
            {videos.map((video,index)=><Link key={index} to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>)}
        </div>
    )
}

export default VideoContainer