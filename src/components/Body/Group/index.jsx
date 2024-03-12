import React, { useState } from 'react'
import Members from './Members'

export default function Group({ groupJoined }) {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div className='group max-w-[90%] my-[50px] pb-10 bg-transparent'>
            <div className='groupLocation w-[260px] m-auto flex items-center bg-transparent px-2 border-b-2 border-black'>
                <i class="ri-map-pin-2-line text-xl"></i>
                <input className='px-2 flex-1 w-full h-[35px] border-none outline-none bg-transparent'
                    type='text' placeholder='Location' />
                <i className="ri-pencil-line text-2xl"></i>
            </div>
            <div className='groupLocation flex w-[260px] m-auto pt-[25px] text-slate-400 mb-10'>
                <i class="ri-information-2-line mr-2"></i>
                <p className='text-[14px]'>Your location will help us serve better & extend a personalized experience</p>
            </div>

            <div>
                {
                    groupJoined
                        ? <div className='w-full bg-white'>
                            <div className='groupPadding px-3 py-4 '>
                                <i class="ri-thumb-up-line text-xl"></i> Recommended Groups
                            </div>
                            <Members profile={'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Sarthak Kamra'} />
                            <Members profile={'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Sarah West'} />
                            <Members name={'Ronam Jones'} profile={'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                            <Members name={'Joseph Gray'} profile={'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

                            {
                                seeMore
                                    ? <div>
                                        <Members profile={'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Sarthak Kamra'} />
                                        <Members profile={'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Sarah West'} />
                                        <Members name={'Ronam Jones'} profile={'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                                        <Members name={'Joseph Gray'} profile={'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                                    </div>
                                    : null
                            }


                            <div className='px-3 mt-3'>
                                <button className='border-none outline-none bg-transparent text-[13px] text-blue-400 '
                                    onClick={() => setSeeMore(!seeMore)}
                                >{
                                        seeMore ? 'Less...'
                                            : "See More..."
                                    }
                                </button>
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}
