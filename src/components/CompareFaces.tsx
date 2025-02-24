import { useRef, useState, useCallback } from 'react';
import WebCamComponent, { WebcamRef }  from './utils/Webcam';
import { FacesSimilarity } from '../types/FaceSimiliarity';
import Dialog from './utils/Dialog';
import "../global.css"
import axios from './api/useAxios'
import { AxiosError } from "axios";
import { TaniAuthTypes } from '../types/TaniAuthTypes';

export const CompareFaces:React.FC<TaniAuthTypes> = ({authInstance, onSuccess}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [capturedImage2, setCapturedImage2] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [facesSimilarity, setFacesSimilarity] =
        useState<FacesSimilarity | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [comparedImages, setComparedImages] = useState<string[] | null>(null);

    const [error, setError] = useState<string | null>(null);
    const webCamRef = useRef<WebcamRef | null>(null);

    const compareImages = async() => {
        setIsLoading(true)
        setOpenDialog(true)
        try{
            if (imageFile && selectedFile) {
                setIsLoading(true);
                setComparedImages([capturedImage ?? '', capturedImage2 ?? '']);
                const formData = new FormData();
                formData.append('image1', selectedFile);
                formData.append('image2', imageFile);
            
                const response = await axios.post('/persons/compare', 
                formData
                , {
                    headers: authInstance.getHeaders(),
                });
                setIsLoading(false);
                setFacesSimilarity(response.data);
                onSuccess(response.data)
                setOpenDialog(true);
            }
        }catch(err){
            const axiosError = err as AxiosError<{ detail?: string }>;
            if(AxiosError){
                if(axiosError.status === 400){
                    setError( "No Faces Detected in one or both images. Kindly take a clearer picture and try again")
                }
                if(axiosError.status === 401){
                setError( "API key/Group Id is missing")
                }
                if(axiosError.status === 500){
                setError( "Internal server error")
                }
            }
            // console.log(err);
            setIsLoading(false)
        }
        
    }

    const close_camera = useCallback(() => {
        setCapturedImage(null);
        setCapturedImage2(null);
        setFacesSimilarity(null);
        setIsLoading(false);
        setError(null);
        webCamRef.current?.close_camera();
    }, []);

  return (
    <div className='mt-3 w-full rounded-md bg-white p-4 relative'>
        <h1 className='font-bold text-4xl'>Compare Faces </h1>
        <ul className='mt-3 list-inside list-disc text-gray-500 mb-10'>
            <li>
            {' '}
            Kindly click on the <strong>Compare Faces</strong> button to open the
            camera module.
            </li>
            <li> Please make sure you allow the browser to access your camera.</li>
            <li>
            {' '}
            Select a picture for your gallery as the control image, and take a
            real time photo of yourself to compare both images
            </li>
        </ul>
        <div className='flex flex-wrap gap-5'>
            <div className='flex-grow basis-[320px] rounded-md bg-gray-100 '>
                <WebCamComponent
                    setImageFile={setSelectedFile}
                    setImageSrc={setCapturedImage2}
                    imageSrc={capturedImage2}
                    ref={webCamRef}
                    backgroundStyle="bg-gray-100"
                />
            </div>
            <div className='relative flex-grow basis-[320px] rounded-md border border-gray-300'>
                <WebCamComponent
                    setImageFile={setImageFile}
                    setImageSrc={setCapturedImage}
                    imageSrc={capturedImage}
                    ref={webCamRef}
                />
            </div>
        </div>
        <div className='flex justify-end'>
            <button className='py-3 mt-5 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer' onClick={compareImages}>
            Compare Faces
            </button>
        </div>
        { openDialog && <Dialog closeDialog={() => {setOpenDialog(false); close_camera()}}>
        <div className='flex flex-col justify-center'>
            <div className='flex space-x-3'>
                {comparedImages?.map((image, index) => (
                <div
                    key={index}
                    className='relative h-fit w-1/2 rounded-md bg-white shadow-md mb-3'
                >
                    <img
                    src={image}
                    alt='Selected Image'
                    style={{ objectFit: 'scale-down' }}
                    className='selected-image rounded-md mx-auto'
                    />
                </div>
                ))}
            </div>
            {isLoading && (
                <div className='flex flex-col items-center justify-center'>
                    <div className='border-t-[#4327B2] h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200'></div>
                    <h4 className='mt-3 text-xl font-bold'>Comparing Images</h4>
                </div>
            )}
            {error !== null && (
                <div className='text-center flex justify-center items-center'>
                    <h5 className='w-1/2'>{error}</h5>
                </div>
            )}
            {facesSimilarity && (
                <div className='mt-5 text-center'>
                <p className='text-lg font-semibold text-gray-600'>
                    Confidence Percentage
                </p>
                <h2 className='font-bold'>
                    {(facesSimilarity.similarity_score * 100).toFixed(2)}%
                </h2>
                <p className='text-gray-500'>{facesSimilarity.message}</p>
                </div>
            )}
          </div>
              
        </Dialog>
        }
    </div>
  )
}
