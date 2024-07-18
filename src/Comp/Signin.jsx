import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { auth } from '../Firebase/config'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const {register,handleSubmit} = useForm();
    const navigateTo = useNavigate();
    const onSubmit = async (data) => {
        const mydata = await data;
        console.log("data",mydata)
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(auth,email,password)
        .then((credentials) => {
            const user = credentials.user;
            if(user){
                console.log("Signin success");
                console.log("user",user)
                navigateTo('/')
            }
        })
        .catch((error) => {
            console.error("Error occured:",error)
        })
    }
  return (
    <section className='p-2'>
    <h1 className='text-sky-500 font-serif'>SignIn</h1>
    <div className='my-4 bg-slate-100'>
     <form className=' bg-slate-100 p-7 rounded-xl' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('email')} placeholder='Enter email' className='border-b-2 mx-1 bg-slate-100 my-3 block outline-none py-1 px-1 border-gray-500' />
        <input type='password' {...register('password')} placeholder='Enter password' className='border-b-2 mx-1 bg-slate-100 my-3 block outline-none py-1 px-1 border-gray-500' />
        <button className='text-sm bg-sky-500 hover:bg-sky-600 text-whitesmoke' type='submit'>SignIn</button>
     </form>
    </div>
    </section>
  )
}


export default Signin;