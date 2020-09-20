import Link from 'next/link'
import { LOGO_PATH } from '../constants'

interface NavbarProps {
  homePage?: boolean
}

const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <div className='m-0 py-8 px-8 flex flex-row justify-center w-full'>
      <img src={LOGO_PATH} className='h-8 self-center' />
      <div className='flex-1'>&nbsp;</div>
      {props.homePage && (
        <div className='flex flex-col justify-center'>
          <Link href='/login-patient'>
            <button className='button bg-indigo-500 text-white font-medium rounded-full py-2 px-4'>
              Patient Login
            </button>
          </Link>
        </div>
      )}
      {props.homePage && (
        <div className='flex flex-col justify-center'>
          <Link href='/login-provider'>
            <button className='button bg-indigo-500 text-white font-medium rounded-full py-2 px-4'>
              Health Provider Login
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
