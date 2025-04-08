import {useState} from 'react'
import VidWebCam from './utils/VidWebcam'
import { LivenessDetection } from '../types/WebcamTypes';
import Dialog from './utils/Dialog';
import "../global.css"
import { LivenessCheckProps } from '../types/TaniAuthTypes';
import { Check } from "lucide-react";


export  const LivenessCheck:React.FC<LivenessCheckProps> = ({onSuccess}) => {
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<LivenessDetection | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
  return (
    <main className='flex w-full flex-col p-8 relative'>
      <h1 className='font-bold text-xl text-center'>Liveness Check</h1>
      <div className='flex-1'>
        <VidWebCam
            title='Start liveness check'
            setMessage={setMessage}
            setError={setError}
            setOpenDialog={setOpenDialog}
            setResult={setResult}
            onSuccess={onSuccess}
        />
      </div>
      { openDialog && <Dialog closeDialog={() => {setOpenDialog(false);}}>
        <div className='flex justify-center p-6 w-full'>
            {message && (
              <div className='relative flex h-fit w-full px-6 flex-col items-center justify-center rounded-md bg-white'>
                <h5 className='mb-2 text-center'>{message}</h5>
                <div>
                  <div className='flex items-center gap-1'>
                    <span>
                      <Check 
                        strokeWidth={3} 
                        size={18} 
                        className={`font-bold ${result?.blink_detected ? 'text-[#64C155]': 'text-[#F2F4F7]'}`}
                      />
                      
                    </span>{' '}
                    <span>Eyes Blink</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>
                      <Check 
                        strokeWidth={3} 
                        size={18} 
                        className={`font-bold ${result?.mouth_open_detected ? 'text-[#64C155]': 'text-[#F2F4F7]'}`}
                      />
                    </span>{' '}
                    <span>Mouth Open</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>
                      <Check 
                        strokeWidth={3} 
                        size={18} 
                        className={`font-bold ${result?.head_movement_detected ? 'text-[#64C155]': 'text-[#F2F4F7]'}`}
                      />
                    </span>{' '}
                    <span>Head Movement</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>
                      <Check 
                        strokeWidth={3} 
                        size={18} 
                        className={`font-bold ${result?.is_live ? 'text-[#64C155]': 'text-[#F2F4F7]'}`}
                      />
                    </span>{' '}
                    <span>Live</span>
                  </div>
                </div>
              </div>
            )}
        </div>

          {error !== null && (
            <div className='text-center'>
              <h5 className=''>{error}</h5>
            </div>
          )}   
      </Dialog>
      }
    </main>
  )
}

