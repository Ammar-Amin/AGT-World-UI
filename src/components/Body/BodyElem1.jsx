import React from 'react'

export default function BodyElem1({ img, work, title, profile, name }) {
    return (
        <div className='w-[90%] min-h-[400px] mt-6 border border-slate-400'>
            <img src={img} alt='Img'
                className='w-full h-[180px] object-cover object-top-[20px]' />
            <div className='p-3'>
                <i className="ri-edit-line"></i> {work}
            </div>
            <div className='flex justify-between px-3'>
                <p className='text-xl font-bold'>{title}</p>
                <div className="dropdown ">
                    <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ri-more-line text-4xl"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Edit</a></li>
                        <li><a className="dropdown-item" href="#">Report</a></li>
                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                    </ul>
                </div>
            </div>
            <p className='p-3 text-slate-500'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

            <div className='flex justify-between items-center px-3 pt-2 pb-3'>
                <div className='flex items-center gap-3'>
                    <img src={profile} alt='img'
                        className='w-[40px] h-[40px] object-cover rounded-full' />
                    <span>{name}</span>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='views flex gap-1  text-slate-500'>
                        <i className="ri-eye-line"></i>
                        <span>1.4k views</span>
                    </div>
                    <i className="ri-share-forward-fill text-xl p-1 px-2 bg-slate-200 rounded-sm text-slate-600"></i>
                </div>
            </div>
        </div>
    )
}
