import ShimmerCard from "./ShimmerCard"

const MainShimmer = () => {
    return (
        <div className=" ml-16 flex flex-wrap">
         {Array(16).fill("").map((e,index)=><div key={index}><ShimmerCard/></div>)}
        </div>
    )
}

export default MainShimmer