import React from 'react'

const Gallery = () => {
  return (
    <section>
    <h1>Gallery</h1>
    <div className='relative m-4'>
        <img src='/butterflies.jpg' className='m-0 rounded-lg' alt='butterflyu' height='400px' width='500px' />
        <div className='absolute inset-0 rounded-xl bg-opacity-10 hover:bg-opacity-70 hover:cursor-pointer transition-all bg-black'>
            <button className='bg-slate-700 text-whitesmoke outline-none bottom-0 right-0 absolute m-2'>Delete</button>
        </div>
    </div>
    </section>
  )
}

export default Gallery