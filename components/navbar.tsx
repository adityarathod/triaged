import Link from 'next/link'
import { LOGO_PATH } from '../constants'

interface NavbarProps {
  homePage?: boolean
}

const NavbarButton = (props: { href: string; text: string }): JSX.Element => {
  return (
    <div className='flex flex-col justify-center'>
      <Link href={props.href}>
        <button className='button bg-indigo-500 text-white font-medium rounded-full py-2 px-4 ml-4'>
          {props.text}
        </button>
      </Link>
    </div>
  )
}

const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <div className='m-0 py-8 px-8 flex flex-row justify-center w-full'>
      <img src={LOGO_PATH} className='h-8 self-center' />
      <div className='flex-1'>&nbsp;</div>
      {props.homePage && (
        <div className='flex flex-row'>
          <NavbarButton href='/login/patient' text='Patient Login' />
          <NavbarButton href='/login/provider' text='Medical Provider Login' />
          <NavbarButton href='/triage' text='Begin Evaluation' />
        </div>
      )}
    </div>
  )
}

export default Navbar
