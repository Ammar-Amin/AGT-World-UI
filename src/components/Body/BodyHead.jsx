import React from 'react'

export default function BodyHead({ groupJoined, setGroupJoined }) {
    return (
        <div>
            <div className='bodyhead mt-4 w-[70%] h-[63px] m-auto flex justify-between items-center border-b-2 border-slate-300'>
                <div className='flex gap-6 text-slate-400 cursor-pointer'>
                    <p className=' py-[20px] text-black border-b-2 border-black'>All Posts(32)</p>
                    <p className='body-heads py-[20px] hover:text-black hover:border-b-2 border-black'>Article</p>
                    <p className='body-heads py-[20px] hover:text-black hover:border-b-2 border-black'>Event</p>
                    <p className='body-heads py-[20px] hover:text-black hover:border-b-2 border-black'>Education</p>
                    <p className='body-heads py-[20px] hover:text-black hover:border-b-2 border-black'>Job</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <button className='writepostbtn bg-slate-200 px-2 pb-1 rounded-sm'>Write a Post <i className="ri-arrow-drop-down-fill text-2xl"></i></button>

                    <button className={
                        groupJoined ? 'bg-slate-200 text-black px-3 py-1 rounded-sm'
                            : 'bg-blue-600 text-white px-3 py-1 rounded-sm'
                    }
                        onClick={() => setGroupJoined(!groupJoined)}
                    >{
                            groupJoined
                                ? <span><i class="ri-arrow-left-circle-line"></i> Leave Group </span>
                                : <span><i className="ri-group-fill"></i> Join Group </span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
