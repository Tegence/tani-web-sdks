import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { AiOutlineCamera } from "react-icons/ai";
import { PiCamera, PiCloudArrowUp } from 'react-icons/pi';

const CameraCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
//   const [image, setImage] = useState<string | null>(null);
  const [displayCamera, setDisplayCamera] = useState(false);

//   const captureImage = () => {
//     if (webcamRef.current) {
//       const capturedImage = webcamRef.current.getScreenshot();
//       if (capturedImage) {
//         setImage(capturedImage);
//       }
//     }
//   };

  return (
    <div className="flex flex-col items-center gap-4">
        <h5>Capture Image</h5>
        <p className='text-sm text-gray-500'>
          Click to open the camera module and allow the browser to access your
          camera.
        </p>
        {
            displayCamera ? (
                <div>
                    <div
                        className='relative flex items-center justify-center'
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
                            <button className='mt-5'>
                                <AiOutlineCamera className='mr-2 inline-block' /> Capture
                                Photo
                            </button>
                            <button
                                onClick={() => {
                                setDisplayCamera(false);
                                }}
                                className='mt-5'
                            >
                                Close Camera
                            </button>
                        </div>
                    </div>
                </div>
            ):
            <div>
                <PiCamera size={70} className='text-gray-500' />
            </div>
            
        }
    </div>
  );
};

export default CameraCapture;
