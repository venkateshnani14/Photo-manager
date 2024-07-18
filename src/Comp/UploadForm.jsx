import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { getFiles } from '../hooks/useStorage';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isDisabled, setisDisabled] = useState(false)

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <div className='py-10'>
      <form>
      <label className='font-bold'>
        Upload file {' '}
        <span className='px-2 py-1 mx-2 rounded-full bg-green-400 text-white hover:bg-green-500 hover:cursor-pointer transition-all'>+</span>
        <input type="file" onChange={handleChange}  className='hidden'/>
        </label>
        <button className='text-whitesmoke bg-gradient-to-r from-green-400 to-blue-400 outline-hidden border-none mx-4 hover:text-white' disabled={isDisabled} onClick={(e) => {
          getFiles(e);
          setisDisabled(!isDisabled);
        }}>View Gallery</button>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
    </div>  
  );
}

export default UploadForm;