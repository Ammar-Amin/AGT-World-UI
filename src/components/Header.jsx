import React, { useState } from 'react'

export default function Header({ bgDark, setBgDark }) {

    return (
        <div className='w-full h-[72px]'>
            <div className='h-full mx-16 flex justify-between items-center'>
                <h2 className='heading text-3xl text-slate-500'> ATG.WORLD </h2>
                <div className='search-area w-[400px] h-[40px] flex items-center px-3 rounded-full bg-slate-100'>
                    <i className="ri-search-line text-2xl text-slate-400 ml-3"></i>
                    <input className='px-4 flex-1 h-[35px] border-none outline-none bg-transparent' type='text' placeholder='Search for your favorite groups in ATB' />
                </div>
                <div className='creat-acc flex item-center gap-2 text-xl'>
                    <h2>Create account.</h2>
                    <button className='text-blue-600 font-bold'
                        onClick={() => setBgDark(!bgDark)}
                    >It's free! <i className="ri-arrow-drop-down-fill"></i></button>
                </div>
            </div>
        </div>
    )
}
