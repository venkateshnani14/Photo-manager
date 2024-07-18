import React from 'react'

const Navbar = () => {
  return (
    <ul className='md:flex justify-between max-w-[90vw] flex-wrap p-4 text-start left-0'>
        <ul className='md:flex'>
        <li className='px-2 md:py-0 py-1'>
           <a href="#" className='text-black font-sans'><img src='/vite.svg' /></a>
        </li>
        <li className='px-2 md:py-0 py-1'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Home</a>
        </li>
        <li className='px-2 md:py-0 py-1'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>My Profile</a>
        </li>
        <li className='px-2 md:py-0 py-1'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Analytics</a>
        </li>
        <li className='px-2 md:py-0 py-1'>
           <a href="#" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Collages</a>
        </li>
        </ul>
        <ul className='md:flex md:px-4 md:py-0 text-start left-0 '>
            <li className='px-2 md:py-0 py-1 '>
                <a href="/signin" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>SignIn</a>
            </li>
            <li className='px-2 md:py-0 py-1'>
                <a href="/signup" className='text-sky-400 font-sans hover:text-sky-500 transition-all'>Signup</a>
            </li>
        </ul>
    </ul>
  )
}

export default Navbar