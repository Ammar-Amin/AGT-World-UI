import React from 'react'

export default function SignIn({ createAcc, setCreateAcc }) {
    return (
        <div className='z-40 mt-8 bg-white w-full min-h-[440px] rounded-xl'>
            <p className='py-3 text-[14px] text-center text-slate-600 bg-slate-100 rounded-t-xl'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

            <div className='accountitems flex '>
                <div className=' item1 flex flex-col w-[40%] mx-10 my-2'>
                    <h1 className='text-4xl font-bold my-3'>Sign In</h1>
                    <input type='text' placeholder='Email'
                        className='px-3 py-2 bg-slate-50 border-none outline-none mb-[1px]'
                    />
                    <input type='text' placeholder='Password'
                        className='px-3 py-2 bg-slate-50 border-none outline-none'
                    />
                    <button className='text-center my-3 py-2 rounded-full text-white font-bold bg-blue-600'>Sign In</button>

                    <button className='text-center border text-slate-700 border-slate-400 py-1 mt-[7px] rounded-md'>Sign in with Facebook</button>
                    <button className='text-center border text-slate-700 border-slate-400 py-1 mt-[7px] rounded-md'>Sign in with Google</button>

                    <p className='text-center my-6'>Forgot Password?</p>
                </div>
                <div>
                    <div className='createAccText h-[30px] text-[15px] flex items-center mt-8'>
                        <p>Don't have an account yet?</p>
                        <button className='ml-2 bg-transparent text-blue-700 outline-none border-none cursor-pointer'
                            onClick={() => setCreateAcc(!createAcc)}
                        >Create new for free!</button>

                    </div>
                    <img src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='img'
                        className='accountimg w-[320px] mt-3 h-[280px] object-cover rounded-xl'
                    />
                </div>
            </div>
        </div>
    )
}
