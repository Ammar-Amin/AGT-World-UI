import React, { useState } from 'react'
import CreateAccount from './CreateAccount'
import SignIn from './SingIn'


export default function Accout({ bgDark, setBgDark }) {

    const [createAcc, setCreateAcc] = useState(true)

    return (
        <div className='account absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-[750px] min-h-[500px]'>
            <i className="ri-close-line absolute right-0 text-xl bg-slate-300 rounded-full px-1 cursor-pointer"
                onClick={() => setBgDark(!bgDark)}
            ></i>
            {
                createAcc
                    ? <CreateAccount createAcc={createAcc} setCreateAcc={setCreateAcc} />
                    : <SignIn createAcc={createAcc} setCreateAcc={setCreateAcc} />
            }

        </div>
    )
}
