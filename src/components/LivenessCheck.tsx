import {useState} from 'react'
import VidWebCam from './utils/VidWebcam'
import { LivenessDetection } from '../types/WebcamTypes';
import Dialog from './utils/Dialog';
import "../global.css"

export  const LivenessCheck = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<LivenessDetection | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
  return (
    <main className='flex w-full flex-col relative'>
      <h1>Liveness Check</h1>
      <ul className='mt-3 list-inside list-disc text-gray-500'>
        <li>
          {' '}
          Click on the <strong>Record Face</strong> button to open the camera
          module.
        </li>
        <li> Please make sure you allow the browser to access your camera.</li>
        <li>
          {' '}
          Record a video of your face and click the <strong>Record</strong>{' '}
          button to check your liveness.
        </li>
      </ul>
      <div className='flex-1'>
        <VidWebCam
            title='Start liveness check'
            setMessage={setMessage}
            setError={setError}
            setOpenDialog={setOpenDialog}
            setResult={setResult}
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
                      <input type='radio' checked={result?.blink_detected} />
                    </span>{' '}
                    <span>Eyes Blink</span>
                  </div>
                  <div>
                    <span>
                      <input
                        type='radio'
                        checked={result?.mouth_open_detected}
                      />
                    </span>{' '}
                    <span>Mouth Open</span>
                  </div>
                  <div>
                    <span>
                      <input
                        type='radio'
                        checked={result?.head_movement_detected}
                      />
                    </span>{' '}
                    <span>Head Movement</span>
                  </div>
                  <div>
                    <span>
                      <input type='radio' checked={result?.is_live} />
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

