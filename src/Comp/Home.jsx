import React from 'react'
import UploadForm from './UploadForm'
import Navbar from './Navbar'
import { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)

    return (
      <div id='app' className="w-[100vw] min-h-[100vh] pl-10 bg-slate-100">
        <Navbar />
        <div className='w-[90vw]'>
        <UploadForm />
        <div id='imgs' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'></div>
      </div>
      </div>
    )
  }

export default Home