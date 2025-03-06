import { useEffect, useRef, useState } from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { SquarePlay } from "lucide-react";


import { VidWebCamProps } from '../../types/WebcamTypes';

export interface WebcamRef {
  close_camera: () => void;
}

const VidWebCam = (
  (
    {
      setMessage,
      setError,
      setOpenDialog,
      title,
      setResult,
      onSuccess,
    }: VidWebCamProps
  ) => {
    const [displayCamera, setDisplayCamera] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const socketRef = useRef<WebSocket | null>(null);
    const [instructions, setInstructions] = useState<string>(
      'Waiting for instructions...'
    );

    useEffect(() => {
      if (!displayCamera) {
        return;
      }
      // Initialize WebSocket connection
      socketRef.current = new WebSocket(
        'wss://tani-face-model-77573755128.us-central1.run.app/real-time-liveliness-detection'
      );

      socketRef.current.onopen = () => {
        // setResponse(prev => prev + "Connected to WebSocket server.\n");
      };

      socketRef.current.onmessage = (event) => {
        const message = JSON.parse(event.data);

        if (message.instruction) {
          setInstructions(message.instruction);
        }

        if (message.results) {
          setInstructions('Liveness detection completed!');
          setResult(message.results);
          onSuccess(message.results);
          socketRef.current?.close();
          setOpenDialog(true);
          setMessage('Liveness detection completed!');
          setDisplayCamera(false);
        }

        if (message.error) {
          setError?.(message.error);
        }
      };

      socketRef.current.onclose = () => {
        // setResponse(prev => prev + "Connection closed.\n");
      };

      socketRef.current.onerror = (error) => {
        console.error(error)
      };

      return () => {
        socketRef.current?.close();
      };
    }, [displayCamera]);

    useEffect(() => {
      if (!displayCamera) {
        return;
      }
      const video = videoRef.current;
      if (!video) return;

      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
            sendFrame();
          };
        })
        .catch((err) => {
          console.error('Error accessing webcam:', err);
          alert('Please allow access to your webcam.');
        });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;

      const sendFrame = () => {
        if (!video.videoWidth || !video.videoHeight) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const frame = canvas.toDataURL('image/jpeg');
        if (frame === 'data:,') {
          console.warn('Empty frame captured. Skipping...');
          return;
        }

        if (socketRef.current?.readyState === WebSocket.OPEN) {
          socketRef.current.send(JSON.stringify({ frame }));
        }

        setTimeout(sendFrame, 200);
      };

      return () => {
        if (video.srcObject) {
          (video.srcObject as MediaStream)
            .getTracks()
            .forEach((track) => track.stop());
        }
      };
    }, [displayCamera]);

    return (
      <div className='mx-auto max-w-xl p-8'>
        <h5>{title || 'Record Video'}</h5>
        <p className='text-sm text-gray-500'>
          Click to open the camera module and allow the browser to access your
          camera.
        </p>

        <>
          {displayCamera ? (
            <div className='mt-5'>
              <div
                className='relative flex items-center justify-center'
                id='container'
              >
                <div className='h-full w-3/4'>
                  <CircularProgressbarWithChildren
                    value={
                      instructions === 'Please open your mouth'
                        ? 33.33
                        : instructions === 'Please move your head'
                        ? 66.66
                        : instructions === 'Liveness detection completed!'
                        ? 100
                        : 0
                    }
                    strokeWidth={3}
                    styles={buildStyles({
                      pathColor: '#4327B2',
                      trailColor: '#D3D3D3',
                      strokeLinecap: 'round',
                    })}
                  >
                    <video
                      ref={videoRef}
                      autoPlay
                      className='w-full scale-[1.33]'
                      style={{ clipPath: 'circle(40%)' }}
                    />
                  </CircularProgressbarWithChildren> 
                </div>
              </div>
              <p className='my-4 text-center text-lg text-gray-700'>
                {instructions}
              </p>
              <button
                className='mx-auto block py-2 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDisplayCamera(false);
                }}
              >
                Close Liveness
              </button>
            </div>
          ) : (
            <div className='relative mt-5 flex min-h-[300px] flex-col items-center justify-center rounded-md border border-gray-300 bg-white p-8'>
              <SquarePlay size={70} className='text-gray-500'/>
              <div className='mt-3 text-center'>
                <p className='text-gray-700'>
                  <span className='text-[#4327B2] cursor-pointer font-semibold'>
                    Click on open camera to start recording
                  </span>
                </p>
              </div>
              <div className='mt-5 flex w-full flex-col items-center gap-2 md:flex-row'>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDisplayCamera(true);
                  }}
                  className='flex-grow basis-10 md:basis-10 hover:bg-[#B9AEE7] text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-2 rounded-md cursor-pointer'
                >
                  Open Camera
                </button>
              </div>
            </div>
          )}
        </>
      </div>
    );
  }
);

export default VidWebCam;