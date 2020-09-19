import Head from 'next/head'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <>
      <Head>
        <title>Triaged: Home</title>
      </Head>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: '-1000',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <video
          autoPlay
          muted
          loop
          id='vid'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}>
          <source src='/media/doctor-stock-hd.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='fixed top-0 left-0 w-full' style={{ zIndex: '1000' }}>
        <Navbar homePage />
      </div>
      <div
        className='fixed top-0 left-0 w-full h-full flex items-center justify-center'
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <h1 className='text-white font-medium text-5xl'>
          Find and triage medical problems faster, remotely.
        </h1>
      </div>
    </>
  )
}

export default Home
