import Link from 'next/link'
import { LOGO_PATH } from '../constants'
import Login from '../components/login'

const PatientLogin = () => {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <div className='w-1/3 h-full flex items-center justify-center bg-indigo-500 text-white'>
        <img src={LOGO_PATH} className='w-1/2' />
      </div>
      <div className='w-2/3 h-full py-16 px-12 flex flex-col justify-center items-center'>
        <h1 className='font-medium text-4xl mb-6'>Patient Login</h1>
        <Login/>
      </div>
    </div>
  )
}

export default PatientLogin
