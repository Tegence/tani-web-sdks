import React, { useRef, useState, useEffect } from 'react';
import WebCamComponent  from './utils/Webcam';
import './global.css'
import axios from './api/axios'


const EnrollUser:React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputName, setInputName] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)

    const create_person_with_image = async () => {
      // try {
      //   const response = await axios.post('/persons/create-with-image', {
      //     person_name:inputName,
      //     image:imageFile
      //   }, {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'x-api-key': apiKey,
      //       'x-group-id': groupId,
      //     },
      //   });
      //   console.log(response);
      // } catch (error) {
      //   // return handleApiError(error);
      // }
    };

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
 

  return (
    <div className='mx-auto mt-10 w-fit rounded-md bg-white p-5'>
        <div className='mb-3 border-b border-gray-300 py-3 text-gray-700'>
          <h4 className='font-bold'>Create a new user</h4>
          <p className='text-sm'>
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
        <WebCamComponent
          setImageFile={setImageFile}
          setImageSrc={setImageSrc}
          imageSrc={imageSrc}
        />
        {imageSrc && (
          <div className='flex justify-end'>
            <button
              className='mt-5 py-3 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer'
              onClick={create_person_with_image}
            >
              Upload Photo
            </button>
          </div>
        )}
    </div>
  )
}

export default EnrollUser
