import ShimmerCard from "./ShimmerCard"

const MainShimmer = () => {
    return (
        <div className="flex flex-wrap">
         {Array(16).fill("").map((e,index)=><div key={index}><ShimmerCard/></div>)}
        </div>
    )
}

export default MainShimmer