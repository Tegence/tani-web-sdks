import React, { useState } from 'react'
import WebCamComponent  from './utils/Webcam';
import './global.css'

const FaceRecognition:React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)

  return (
    <main className='flex w-full flex-col bg-gray-100 p-8'>
      <h1 className='font-bold text-4xl'>Face Search</h1>
      <ul className='mt-3 list-inside list-disc text-gray-500'>
        <li>
          {' '}
          Click on the <strong>Capture Face</strong> button to open the camera
          module.
        </li>
        <li> Please make sure you allow the browser to access your camera.</li>
        <li>
          {' '}
          Take a picture of your face and click the <strong>Verify</strong>{' '}
          button to find a user that matches your face.
        </li>
      </ul>
      <div className='w-fit mx-auto mt-6'>
        <WebCamComponent
          setImageFile={setImageFile}
          setImageSrc={setImageSrc}
          imageSrc={imageSrc}
        /> 
      </div>
      {imageSrc && (
        <div className='flex justify-end'>
            <button
                className='mt-5 py-3 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer'
                // onClick={create_person_with_image}
            >
                Verify Photo
            </button>
        </div>
        )}
    </main>
  )
}

export default FaceRecognition
