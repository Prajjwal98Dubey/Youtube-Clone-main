const MessageChat = ({name,message})=> {
    return(
        <div className="flex items-center shadow-md">
        <div>
            <img className='w-10 h-10' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user" />
        </div>
        <div className="">
            <span className="font-bold m-1 text-1xl">{name}</span>
            <span className="text-sm">{message}</span>
        </div>
        </div>

        )
}

export default MessageChat