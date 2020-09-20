import Link from 'next/link'
import { LOGO_PATH } from '../constants'
import React, { useRef, useEffect } from 'react'
import * as typeformEmbed from '@typeform/embed'
import { useRouter } from 'next/router'

const Triage = () => {
  const typeformRef = useRef(null)
  const router = useRouter()
  useEffect(() => {
    typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/hN84Gk1f', {
      hideFooter: true,
      hideHeaders: true,
      opacity: 0,
      buttonText: "Let's get Started.",
      onSubmit: function () {
        router.push('/dashboard')
        // TODO: make this go to confirmation page
      },
    })
  }, [typeformRef])
  return (
    <div className='flex flex-row w-screen h-screen bg-indigo-500 text-white'>
      <div ref={typeformRef} className='w-2/3 h-full bg-white'></div>
      <div className='w-1/3 h-full flex items-center justify-center'>
        <img src={LOGO_PATH} className='h-8 self-center' />
      </div>
    </div>
  )
}

export default Triage
