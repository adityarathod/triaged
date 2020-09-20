import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { LOGO_PATH } from '../constants'
import Firebase from './firebase'

const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const router = useRouter()
    return (
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2'>
          <div className='mb-4'>
            {loginError}
          </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
            onChange={event => setEmail(event.target.value)}
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
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className='flex items-center justify-center'>
            <button
              className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={e => {
                Firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .catch(err => {
                    setLoginError(err.message)
                })
                router.push(props.landingPage)
              }}>
              Sign In
            </button>
        </div>
      </form>
    )
}

export default Login
