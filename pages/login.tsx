import Link from 'next/link'
import { LOGO_PATH } from '../constants'

const Login = () => {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <div className='w-1/3 h-full flex items-center justify-center bg-indigo-500 text-white'>
        <img src={LOGO_PATH} className='w-1/2' />
      </div>
      <div className='w-2/3 h-full py-16 px-12 flex flex-col justify-center items-center'>
        <h1 className='font-medium text-4xl mb-6'>Medical Provider Login</h1>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Username'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
            />
          </div>
          <div className='flex items-center justify-center'>
            <Link href='/dashboard'>
              <button
                className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'>
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
