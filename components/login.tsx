import firebase from '../firebase'
import { useState } from 'react'
import { info } from '../util/log'
import { useRouter } from 'next/router'

interface LoginProps {
  landingPage: string
}

const Login = (props: LoginProps): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const submit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => router.push(props.landingPage))
      .catch(err => alert(err))
    info(`${email}, ${password}`)
  }
  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2'>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='flex items-center justify-center'>
        <button
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='button'
          onClick={submit}>
          Log In
        </button>
      </div>
    </form>
  )
}

export default Login
