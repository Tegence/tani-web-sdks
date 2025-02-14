import React, { useRef, useState } from 'react';
import Webcam  from 'react-webcam';
import './EnrollUser.css'
const EnrollUser:React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputName, setInputName] = useState<string>('');


  return (
    <div className='container'>
        <div className='wrapper'>
          <h4>Create a new user</h4>
          <p className='small-text'>
            Users created would be validated during authentication.
          </p>
        </div>
        <div className='my-4 flex  flex-col gap-2'>
          <label className='text-sm font-semibold' htmlFor='Name'>
            Name
          </label>
          <input
            type='text'
            placeholder="Enter Your Customer's Name"
            className='rounded border p-2'
            ref={inputRef}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        {/* <Webcam/> */}
    </div>
  )
}

export default EnrollUser
