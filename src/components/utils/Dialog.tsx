import React from 'react'
import { DialogProps } from '../../types/DialogTypes'
import { FaTimes } from "react-icons/fa";

const Dialog:React.FC<DialogProps> = ({children, closeDialog}) => {

  return (
    <div className='absolute inset-0 backdrop-blur-2xl flex justify-center items-center'>
        <div className='backdrop-blur-sm p-6 shadow flex flex-col'>
            <FaTimes onClick={closeDialog} className=' text-black text-xl mb-4 self-end cursor-pointer'/>
            <div className='bg-white shadow-md p-4 rounded-md w-fit h-fit'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Dialog
