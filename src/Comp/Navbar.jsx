import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex justify-between max-w-[90vw] flex-wrap p-4'>
        <ul className='flex'>
        <li className='px-2'>
           <a href="#" className='text-black font-sans'><img src='/vite.svg' /></a>
        </li>
        <li className='px-2'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Home</a>
        </li>
        <li className='px-2'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>My Profile</a>
        </li>
        <li className='px-2'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Analytics</a>
        </li>
        <li className='px-2'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Collages</a>
        </li>
        </ul>
        <ul className='flex px-4'>
            <li className='px-2'>
                <a href="/login" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Login</a>
            </li>
            <li className='px-2'>
                <a href="/signup" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Signup</a>
            </li>
        </ul>
    </ul>
  )
}

export default Navbar