import React, { useState } from 'react'

export default function Members({ profile, name }) {
    const [followClicked, setFollowClicked] = useState(false);
    return (
        <div className='h-[50px] px-3 flex justify-between items-center mt-2'>
            <div className='flex items-center gap-3'>
                <img src={profile} alt='profile'
                    className='w-[40px] h-[40px] object-cover rounded-full'
                />
                <p className='text-[13px]'>{name}</p>
            </div>
            <button className={
                followClicked ?
                    'rounded-full p-1 px-3 text-[13px] bg-slate-800 text-white'
                    : 'rounded-full p-1 px-3 text-[13px] bg-slate-200'
            }
                onClick={() => setFollowClicked(!followClicked)}
            >
                {
                    followClicked
                        ? "Unfollow"
                        : "Follow"
                }
            </button>
        </div>
    )
}
