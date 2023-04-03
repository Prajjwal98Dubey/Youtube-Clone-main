import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { randomNameGenerate, randomStringGenerator } from '../utils/Helper';
import MessageChat from './MessageChat'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const chatMessages = useSelector((store) => store.Chat.messages)
    const dispatch = useDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessage(
                {
                    name: randomNameGenerate(),
                    message: randomStringGenerator(15)
                }
            ))
        }, 2000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className='p-2 mt-1 w-[350px] h-[450px] border border-slate-500 overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {chatMessages.map((c, index) => <MessageChat key={index} name={c.name} message={c.message} />)}
                </div>
            </div>
            <form className='border border-gray-500 shadow-md p-2'
            onSubmit={(e)=>{
                e.preventDefault()
                dispatch(addMessage(
                    {
                    name :"Prajjwal",
                    message: liveMessage
                }))
                setLiveMessage("");

            }}
            > 
           
                <input className='p-1 w-60 h-6' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} type="text" />
                <button type="submit" className='bg-green-500 w-[55px] ml-2 rounded-md'>Send</button>
            </form>
             
        </>
    )
}

export default LiveChat