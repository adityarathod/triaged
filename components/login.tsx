import Link from 'next/link'
import { LOGO_PATH } from '../constants'

const Login = () => {
  return (
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
  )
}

export default Login
