import React,{useState} from 'react'
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { auth } from '../Firebase/config'
const Signup = () => {
    const {register,handleSubmit} = useForm();
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async (data) => {
        const mydata = await data;
        console.log("data",mydata)
        const email = data.email;
        const password = data.password;
        createUserWithEmailAndPassword(auth,email,password)
        .then((credentials) => {
            const user = credentials.user;
            if(user){
                console.log("Signup success");
                console.log("user",user)
            }
        })
        .catch((error) => {
            console.error("Error occured:",error)
        })
    }
  return (
    <section className='p-2'>
    <h1 className='text-sky-500 font-serif'>Signup</h1>
    <div className='my-4 bg-slate-100'>
     <form className=' bg-slate-100 p-7 rounded-xl' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('email')} placeholder='Enter email' className='border-b-2 mx-1 bg-slate-100 my-3 block outline-none py-1 px-1 border-gray-500' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' {...register('password')} placeholder='Enter password' className='border-b-2 mx-1 bg-slate-100 my-3 block outline-none py-1 px-1 border-gray-500' onChange={(e) => setPassword(e.target.value)} />
        <button className='text-sm bg-sky-500 hover:bg-sky-600 text-whitesmoke' type='submit'>Signup</button>
     </form>
    </div>
    </section>
  )
}

export default Signup