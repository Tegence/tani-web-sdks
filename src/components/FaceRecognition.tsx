import React, { useState, useRef, useCallback } from 'react'
import WebCamComponent, { WebcamRef }  from './utils/Webcam';
import Dialog from './utils/Dialog';
import "../global.css"
import axios from './api/useAxios'
import { FaceRecognitionResult } from '../types/FaceRecognitionResult';
import { AxiosError } from "axios";
import { TaniAuthTypes } from '../types/TaniAuthTypes';

export const FaceRecognition:React.FC<TaniAuthTypes> = ({authInstance, onSuccess}) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const webCamRef = useRef<WebcamRef | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [verifyFaceResult, setVerifyFaceResult] = useState<FaceRecognitionResult>()
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
              headers: authInstance.getHeaders(),
          });
          setIsLoading(false);
          // console.log(response);
          setVerifyFaceResult(response.data)
          onSuccess(response.data)
          setOpenDialog(true);
              
        }
      } catch (err) {
          setIsLoading(false)
          const axiosError = err as AxiosError<{ detail?: string }>;
          if(AxiosError){
              if(axiosError.status === 400){
                setError( "No Faces Detected in one or both images. Kindly take a clearer picture and try again")
              }
              if(axiosError.status === 404){
                setError( "We could not find a match for the uploaded image")
              }
              if(axiosError.status === 401){
                setError( "API key/Group Id is missing")
              }
              if(axiosError.status === 500){
                setError( "Internal server error")
              }
          }
          //console.error(err);
          setOpenDialog(true)

      }
    };

    const close_camera = useCallback(() => {
      setImageSrc(null);
      setVerifyFaceResult(undefined);
      setIsLoading(false);
      setError(null);
      webCamRef.current?.close_camera();
    }, []);

  return (
    <main className='flex w-full flex-col bg-gray-100 p-8 relative'>
      <h1 className='font-bold text-4xl text-center'>Face Search</h1>
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
                    className='rounded-md mx-auto'
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
            {verifyFaceResult && (
              <div className='mt-5 text-center'>
                <h4 className='mb-2'>We have your result!</h4>
                <p>{verifyFaceResult.message}</p>
                {verifyFaceResult.potential_match && <p>
                  Based on our records, there's a
                  <strong> {(verifyFaceResult.similarity_score).toFixed(2)}% </strong>{' '}
                  probability that you're
                  <strong> {verifyFaceResult.potential_match}</strong>
                </p>}
              </div>
            )}
            {error !== null &&(
              <div className='flex flex-col items-center justify-center'>
                <h4 className='mt-3 text-xl font-bold w-1/2'>{error}</h4>
              </div>
            )}
        </Dialog>
        }
    </main>
  )
}


