import {useState} from 'react'
import VidWebCam from './utils/VidWebcam'
import { LivenessDetection } from '../types/WebcamTypes';
import Dialog from './utils/Dialog';
import "../global.css"
import { LivenessCheckProps } from '../types/TaniAuthTypes';

export  const LivenessCheck:React.FC<LivenessCheckProps> = ({onSuccess}) => {
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<LivenessDetection | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
  return (
    <main className='flex w-full flex-col p-8 relative'>
      <h1 className='font-bold text-xl'>Liveness Check</h1>
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
        <div className='flex justify-center p-6'>
            {message && (
              <div className='relative flex h-52 w-full px-6 flex-col items-center justify-center rounded-md bg-white'>
                <h5 className='mb-2 text-center'>{message}</h5>
                <div>
                  <div>
                    <span>
                      <input 
                        type='radio' 
                        checked={result?.blink_detected} 
                        readOnly
                      />
                    </span>{' '}
                    <span>Eyes Blink</span>
                  </div>
                  <div>
                    <span>
                      <input
                        type='radio'
                        checked={result?.mouth_open_detected}
                        readOnly
                      />
                    </span>{' '}
                    <span>Mouth Open</span>
                  </div>
                  <div>
                    <span>
                      <input
                        type='radio'
                        checked={result?.head_movement_detected}
                        readOnly
                      />
                    </span>{' '}
                    <span>Head Movement</span>
                  </div>
                  <div>
                    <span>
                      <input type='radio' checked={result?.is_live} readOnly/>
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

