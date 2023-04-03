import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebars = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(isMenuOpen===false) return null

  return (
    <div className='p-5 shadow w-48'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/live"><li>Live</li></Link>
        <li>Shorts</li>
        <li>Video</li>
       
      </ul>
      <h1 className='font-bold pt-3 '>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-3'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebars