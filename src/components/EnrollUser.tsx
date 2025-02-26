import React, { useRef, useState, useEffect, useCallback } from 'react';
import WebCamComponent, { WebcamRef }  from './utils/Webcam';
import Dialog from './utils/Dialog';
import "../global.css"
import axios from './api/useAxios'
import { TaniAuthTypes } from '../types/TaniAuthTypes';

export const EnrollUser:React.FC<TaniAuthTypes> = ({authInstance, onSuccess}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const webCamRef = useRef<WebcamRef | null>(null);
    const [inputName, setInputName] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [uploadCompleted, setUploadCompleted] = useState<boolean>(false)
    const [uploadError, setUploadError] = useState<boolean>(false)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
  

    const create_person_with_image = async () => {
      setIsLoading(true)
      setOpenDialog(true)

      try {
        if(imageFile && inputName){
          setIsLoading(true);
          const file = imageFile;
          const formData = new FormData();
          formData.append('person_name', inputName);
          const group_id = authInstance.getGroupId();
          if (group_id) {
            formData.append('group_id', group_id);
          }
          formData.append('image', file);
          // console.log("form data",formData)
        
          const response = await axios.post('/persons/create-with-image', 
            formData
          , {
            headers: authInstance.getHeaders(),
          });
          setIsLoading(false);
          setUploadCompleted(true);
          setOpenDialog(true)
          onSuccess(response.data)
          // console.log(response.data);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false)
        setUploadError(true);
        setOpenDialog(true)

      }
    };

    const close_camera = useCallback(() => {
      setImageSrc(null);
      setUploadCompleted(false);
      setIsLoading(false);
      setUploadError(false);
      webCamRef.current?.close_camera();
    }, []);


    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    
 

  return (
    <div className='mx-auto mt-10 w-fit rounded-md bg-white p-5 relative'>
        <div className='mb-3 border-b border-gray-300 py-3 text-gray-700'>
          <h4 className='font-bold'>Create a new user</h4>
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
          ref={webCamRef}
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
        { openDialog && <Dialog closeDialog={() => {setOpenDialog(false); close_camera()}}>
          <div className='flex justify-center'>
              {imageSrc && (
                <div className='relative h-fit w-2/3 rounded-md bg-white shadow-md mb-3'>
                  <img
                    src={imageSrc}
                    alt='Selected Image'
                    style={{ objectFit: 'scale-down' }}
                    className='rounded-md'
                  />
                </div>
              )}
            </div>
            {isLoading && (
              <div className='flex flex-col items-center justify-center'>
                <div className='border-t-[#4327B2] h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200'></div>
                <h4 className='mt-3 text-xl font-bold'>Uploading Image</h4>
              </div>
            )}
            {uploadCompleted && !isLoading && (
              <div className='flex flex-col items-center justify-center'>
                <h4 className='mt-3 text-xl font-bold'>
                  Person added successfully
                </h4>
              </div>
            )}
            {uploadError && !isLoading && (
              <div className='flex flex-col items-center justify-center'>
                <h4 className='mt-3 text-xl font-bold'>Unable To Add Person</h4>
              </div>
            )}
        </Dialog>
        }
    </div>
  )
}


