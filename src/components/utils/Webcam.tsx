import React, { forwardRef, useRef, useState,useCallback, useImperativeHandle } from "react";
import Webcam from "react-webcam";
import { AiOutlineCamera } from "react-icons/ai";
import { PiCamera, PiCloudArrowUp } from 'react-icons/pi';
import { WebCamProps } from '../../types/WebcamTypes';
import {
  convertBase64StringToFile,
  handleImageCompression,
} from '../lib/helpers';
import { useDropzone } from 'react-dropzone';

export interface WebcamRef {
  close_camera: () => void;
}

const WebCamComponent = forwardRef(({setImageFile, setImageSrc, imageSrc}:WebCamProps, ref) => {
  const webcamRef = useRef<Webcam>(null);
  const [displayCamera, setDisplayCamera] = useState(false);

  const capture_image = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();

    if (imageSrc) {
      setImageSrc(imageSrc);
      setImageFile(
        convertBase64StringToFile(imageSrc, `unknown-${Date.now()}.jpg`)
      );
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const compressedFile = await handleImageCompression(file);
        if (compressedFile) {
          const convertedFile = new File([compressedFile], file.name, {
            type: file.type,
          });
          setImageFile(convertedFile);
          setImageSrc(URL.createObjectURL(convertedFile));
        }
      }
    },
    [imageSrc]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
    const file = event.target.files && event.target.files[0];
    if (file) {
      const compressedFile = await handleImageCompression(file);
      if (compressedFile) {
        const convertedFile = new File([compressedFile], file.name, {
          type: file.type,
        });

        setImageFile(convertedFile);
        setImageSrc(URL.createObjectURL(convertedFile));
      }
    }
  };
  useImperativeHandle(ref, () => ({
    close_camera: () => {
      setDisplayCamera(false);
      setImageSrc(null);
    },
  }));

  return (
    <div className="flex flex-col items-center gap-4 bg-white p-16 pt-12 rounded-md">
        <div>
            <h5 className="font-semibold">Capture Image</h5>
            <p className='text-sm text-gray-500'>
            Click to open the camera module and allow the browser to access your
            camera.
            </p>
        </div>
        { imageSrc === null ? ( 
            <>
            {
            displayCamera ? (
                <div>
                    <div
                        className='relative flex flex-col justify-center'
                        id='container'
                    >
                        <Webcam
                            audio={false}
                            height={400}
                            width={400}
                            ref={webcamRef}
                            screenshotFormat='image/jpeg'
                            className='  rounded-md'
                        />
                        <div className='flex items-center space-x-2'>
                            <button onClick={capture_image} 
                              className='mt-5 py-1 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer'
                            >
                                <AiOutlineCamera className='mr-2 inline-block ' /> Capture
                                Photo
                            </button>
                            <button
                                onClick={() => {
                                setDisplayCamera(false);
                                }}
                                className='mt-5 text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-1 rounded-md cursor-pointer'
                            >
                                Close Camera
                            </button>
                        </div>
                    </div>
                </div>
            ):(
            <div 
              {...getRootProps()} 
              className={`relative mt-5 flex w-full min-h-[300px] flex-col items-center justify-center rounded-md border border-gray-300 bg-white p-8
              ${isDragActive ? 'bg-destructive/10' : 'bg-white'}`}
            >
                <PiCamera size={70} className='text-gray-500' />
                <div className='mt-3 text-center'>
                  <p className='text-gray-700'>
                    <span className='text-primary cursor-pointer font-semibold'>
                      Click to capture
                    </span>{' '}
                    or drag and drop
                  </p>
                  <p className='text-gray-400'>
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
                <div className='mt-5 flex w-full flex-col  items-center gap-2 md:flex-row'>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setDisplayCamera(true);
                    }}
                    className='flex-grow basis-10 md:basis-10 text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-1 rounded-md cursor-pointer'
                  >
                    Open Camera
                  </button>
                  <div className='flex-grow basis-10  md:basis-10'>
                    <input
                      type='file'
                      id='file-input'
                      accept='image/*'
                      onChange={handleFileInputChange}
                      className='hidden'
                      {...getInputProps()}
                    />
                    <label
                      htmlFor='file-input'
                      className='bg-[#B9AEE7] text-primary flex w-full cursor-pointer items-center justify-center rounded-md p-2 font-medium'
                    >
                      <PiCloudArrowUp
                        size={15}
                        className='text-primary mr-2 inline-block '
                      />
                      <span className='text-sm'> Upload Image</span>
                    </label>
                  </div>
                </div>
            </div>
            
            )
        }
        </>) 
        :
            <div className='relative mt-5 flex min-h-[300px] flex-col items-center justify-center rounded-md bg-white p-5'>
                <img
                src={imageSrc && imageSrc}
                alt='Selected Image'
                width={300}
                height={300}
                className='selected-image'
                />
                <div className='flex w-full justify-start'>
                <button
                    onClick={() => setImageSrc(null)}
                    className='mt-5 text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-1 rounded-md cursor-pointer'
                >
                    Cancel
                </button>
                </div>
            </div>
        }
    </div>
  );
});

export default WebCamComponent;
