import React, { useState, useRef, useCallback } from 'react'
import WebCamComponent, { WebcamRef }  from './utils/Webcam';
import Dialog from './utils/Dialog';
import './global.css'
import axios from './api/useAxios'
import { ProbableUser } from '../types/ProbableUser';
import { AxiosError } from "axios";

const FaceRecognition:React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const webCamRef = useRef<WebcamRef | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [probableUser, setProbableUser] = useState<ProbableUser>();
    const [similarityScore, setSimilarityScore] = useState<number>(0.0);
    const [error, setError] = useState<string | null>(null)
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const identify_user_face = async () => {
      setIsLoading(true)
      setOpenDialog(true)

      try {
        if(imageFile){
          setIsLoading(true);
          const file = imageFile;
          const formData = new FormData();
          formData.append('image', file);
          // console.log("form data",formData)
        
          const response = await axios.post('/persons/authenticate', 
            formData
          , {
            // headers: authInstance.getHeaders(),
              headers: {
                'x-api-key': 'ykru2gKctIAmpLETxx0buQ',
                'x-group-id': 'd2ea1214-22fd-4512-9844-577bdab9ccd5',
              },
          });
          setIsLoading(false);
          console.log(response);
          setProbableUser(response.data.potential_match);
          setSimilarityScore(response.data.similarity_score);
          setOpenDialog(true);
              
        }
      } catch (err) {
          setIsLoading(false)
          const axiosError = err as AxiosError;
          if(AxiosError){
              setError(axiosError?.response?.data?.detail)
          }
          //console.error(err);
          setOpenDialog(true)

      }
    };

    const close_camera = useCallback(() => {
      setImageSrc(null);
      setProbableUser(undefined);
      setIsLoading(false);
      setError(null);
      webCamRef.current?.close_camera();
    }, []);

  return (
    <main className='flex w-full flex-col bg-gray-100 p-8 relative'>
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
          ref={webCamRef}
        /> 
      </div>
      {imageSrc && (
        <div className='flex justify-end'>
            <button
                className='mt-5 py-3 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer'
                onClick={identify_user_face}
            >
                Verify Photo
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
                <h4 className='mt-3 text-xl font-bold'>Verifying Image</h4>
              </div>
            )}
            {probableUser && (
              <div className='mt-5 text-center'>
                <h4 className='mb-2'>We have your result!</h4>
                <p>
                  Based on our records, there's a
                  <strong> {(similarityScore * 100).toFixed(2)}% </strong>{' '}
                  probability that you're
                  <strong> {probableUser._source.person_name}</strong>
                </p>
                <button
                  onClick={() => {
                    close_camera();
                    setOpenDialog(false);
                  }}
                  className='mt-5'
                >
                  Compare Again
                </button>
              </div>
            )}
            {error !== null &&(
              <div className='flex flex-col items-center justify-center'>
                <h4 className='mt-3 text-xl font-bold'>{error}</h4>
              </div>
            )}
        </Dialog>
        }
    </main>
  )
}

export default FaceRecognition
