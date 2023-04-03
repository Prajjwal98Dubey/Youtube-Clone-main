import React from 'react'

const commentsData = [
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: [
            {
                name: "Prajjwal Dubey",
                Comment: "this is the comment section which is bein gmade",
                reply: []
            },
            {
                name: "Prajjwal Dubey",
                Comment: "this is the comment section which is bein gmade",
                reply: []
            },
            {
                name: "Prajjwal Dubey",
                Comment: "this is the comment section which is bein gmade",
                reply: []
            },
            {
                name: "Prajjwal Dubey",
                Comment: "this is the comment section which is bein gmade",
                reply: [
                    {
                        name: "Prajjwal Dubey",
                        Comment: "this is the comment section which is bein gmade",
                        reply: []
                    },
                    {
                        name: "Prajjwal Dubey",
                        Comment: "this is the comment section which is bein gmade",
                        reply: []
                    },
                    {
                        name: "Prajjwal Dubey",
                        Comment: "this is the comment section which is bein gmade",
                        reply: []
                    }

                ]
            },
            {
                name: "Ujjawal Dubey",
                Comment: "this is the commenfdlfksdflsdkt section which is bein gmade",
                reply: []
            },
            {
                name: "Satyam Mishra",
                Comment: "this is the comment section which is bein gmade",
                reply: []
            },
        ]
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    },
    {
        name: "Prajjwal Dubey",
        Comment: "this is the comment section which is bein gmade",
        reply: []
    }

]

const CommentCard = ({commentsData}) => {
    const{name,Comment,reply}=commentsData;
    return (
        <div className='flex m-3 border border-gray-300 bg-gray-300 rounded-lg px-2 py-2'>
            <img className='w-10 h-15' src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" alt="user" />
            <div className='px-2'>
                <p className='font-bold text-1xl'>{name}</p>
                <p className='font-mono'>{Comment}</p>
            </div>
        </div>
    )
}
const CommentsList = ({comments}) => {
    return (
        <div>
             {
             comments.map((comment,index)=>(<div key={index}><CommentCard commentsData={comment}/>
             <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.reply}/>
             </div>
             </div>
             ))}
        </div>
    )
}

const CommentSection = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-3xl'>Comments :</h1>
            <CommentsList comments={commentsData}/>
        </div>

    )
}

export default CommentSection