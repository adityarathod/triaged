import Link from 'next/link'
import { LOGO_PATH } from '../constants'
import React, { useRef, useEffect } from 'react';
import * as typeformEmbed from '@typeform/embed'

const Triage = () => {
    const typeformRef = useRef(null);
  
    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/hN84Gk1f', {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0,
        buttonText: "Let's get Started.",
        });
    }, [typeformRef]);
  return (
    <div className='flex flex-row w-screen h-screen bg-indigo-500 text-white'>
        <div ref={typeformRef} className='w-2/3 h-full flex items-center justify-center bg-white'>
            
        </div>
        <div className='w-1/3 h-full flex items-center justify-center'>
            <img src={LOGO_PATH} className='h-8 self-center' />
        </div>
    </div>
  )
}

export default Triage
