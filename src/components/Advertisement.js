import React from 'react'
import { AD_IMAGE, USER_LOGO } from './constants'
import { useState } from 'react'

const Advertisement = () => {
    const [adISOpen, setAdIsOpen] = useState(true)
    if (adISOpen === false) return null
    return (
        <div className='flex'>
            <img className='p-2 ml-20 w-[85%] h-48' src={AD_IMAGE} alt="advertisement" />
            <button className='h-2 w-3 p-0 mt-1' onClick={() => setAdIsOpen(false)}>❌</button>
        </div>
    )
}

export default Advertisement