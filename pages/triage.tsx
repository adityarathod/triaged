import Link from 'next/link'
import { LOGO_PATH } from '../constants'
import React, { useRef, useEffect } from 'react'
import * as typeformEmbed from '@typeform/embed'
import { useRouter } from 'next/router'
import Typeform from '../components/typeform'

const Triage = () => {
  const router = useRouter()
  return (
    <div className='flex flex-row w-screen h-screen bg-indigo-500 text-white'>
      <Typeform
        className='w-2/3 h-full bg-white'
        buttonText='Get evaluated.'
        tfLink='https://form.typeform.com/to/hN84Gk1f'
      />
      <div className='w-1/3 h-full flex items-center justify-center'>
        <Link href='/'>
          <img src={LOGO_PATH} className='h-8 self-center cursor-pointer' />
        </Link>
      </div>
    </div>
  )
}

export default Triage
