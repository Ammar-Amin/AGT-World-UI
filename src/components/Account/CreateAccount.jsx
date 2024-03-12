import React from 'react'

export default function CreateAccount({ createAcc, setCreateAcc }) {
    return (

        <div className='z-40 mt-8 bg-white w-full min-h-[500px] rounded-xl'>
            <p className='py-3 text-[14px] text-center text-slate-600 bg-slate-100 rounded-t-xl'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

            <div className='accountitems flex '>
                <div className='item1 flex flex-col w-[40%] mx-10 my-2'>
                    <h1 className='text-4xl font-bold my-3'>Create Account</h1>
                    <div className='flex'>
                        <input type='text' placeholder='First Name'
                            className='w-[50%] px-3 py-[10px] bg-slate-50 border-none outline-none border border-slate-400 '
                        />
                        <input type='text' placeholder='Last Name'
                            className='w-[50%] px-3 py-[10px] bg-slate-50 border-none outline-none border border-slate-400 '
                        />
                    </div>
                    <input type='text' placeholder='Email'
                        className='px-3 py-[10px] bg-slate-50 border-none outline-none border border-slate-400 '
                    />
                    <input type='text' placeholder='Password'
                        className='px-3 py-[10px] bg-slate-50 border-none outline-none border border-slate-400'
                    />
                    <input type='text' placeholder='Confirm Password'
                        className='px-3 py-[10px] bg-slate-50 border-none outline-none border border-slate-400'
                    />
                    <button className='text-center my-3 py-2 rounded-full text-white font-bold bg-blue-600'>Create Account</button>

                    <button className='text-center border text-slate-700 border-slate-400 py-1 mt-[7px] rounded-md'>Sign up with Facebook</button>
                    <button className='text-center border text-slate-700 border-slate-400 py-1 mt-[7px] rounded-md'>Sign up with Google</button>

                </div>
                <div>
                    <div className='h-[30px] text-[15px] flex justify-center items-center mt-8'>
                        <p>Already have an Account?</p>
                        <button className='ml-2 bg-transparent text-blue-700 outline-none border-none cursor-pointer'
                            onClick={() => setCreateAcc(!createAcc)}
                        >Sign In!</button>

                    </div>
                    <img src='https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='img'
                        className='accountimg w-[330px] mt-3 h-[310px] object-cover rounded-xl'
                    />
                    <p className='signupText text-[12px] text-slate-500 mt-3'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>
        </div>
    )
}
