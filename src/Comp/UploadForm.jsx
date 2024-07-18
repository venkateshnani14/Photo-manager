import React, { useState,useEffect } from 'react';
import { getFiles } from '../hooks/useStorage';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isDisabled, setisDisabled] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false);
  const types = ['image/png', 'image/jpeg'];
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUploaded(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isUploaded]);
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
      setIsUploaded(true);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <div className='py-10'>
      <form>
      <label className='font-bold text-sm md:text-lg'>
        Upload file {' '}
        <span className='px-2 py-1 mx-2 rounded-full bg-green-400 text-white hover:bg-green-500 hover:cursor-pointer transition-all'>+</span>
        <input type="file" onChange={handleChange}  className='hidden'/>
        </label>
        <button className='text-whitesmoke text-xs md:text-lg xl:text-xl bg-gradient-to-r from-green-400 to-blue-400 outline-hidden border-none mx-4 hover:text-white' disabled={isDisabled} onClick={(e) => {
          getFiles(e);
          setisDisabled(!isDisabled);
        }}>View Gallery</button>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { isUploaded && (
      <div className=" text-gray-600 py-1 px-2 rounded-lg my-2">
        Refresh the page
      </div>
    ) }
      </div>
    </form>
    </div>  
  );
}

export default UploadForm;