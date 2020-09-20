import Navbar from '../components/navbar'

const ProviderDashboard = () => {
  return (
    <>
      <Navbar />
      <div className='mt-2 px-32'>
        <h1 className='text-4xl font-bold'>Provider Dashboard</h1>
        <hr className='my-4' />
        <div className='w-full flex flex-row shadow-md rounded-lg' style={{ height: '500px' }}>
          <div className='w-3/8 h-full rounded-tl-lg rounded-bl-lg flex flex-col overflow-scaroll text-center'>
            <div className='px-6 py-4 cursor-pointer bg-indigo-500 text-white font-medium capitalize rounded-tl-lg'>
              melanoma
            </div>
            <div className='px-6 py-4 cursor-pointer font-medium capitalize'>bowen's disease</div>
            <div className='px-6 py-4 cursor-pointer font-medium capitalize'>
              benign keratosis-like lesions
            </div>
            <div className='px-6 py-4 cursor-pointer font-medium capitalize'>dermatofibroma</div>
            <div className='px-6 py-4 cursor-pointer font-medium capitalize'>melanoma</div>
            <div className='px-6 py-4 cursor-pointer font-medium capitalize'>melanocytic nevi</div>
            <div className='px-6 py-4 cursor-pointer font-medium capitalize'>vascular lesions</div>
          </div>
          <div className='flex-1 h-full px-10 py-4'>
            <h2 className='text-3xl font-medium'>Possible Melanoma Cases</h2>
            <div className='w-full flex flex-row'>
              <div className='flex-1 py-6'>
                <p>
                  <span className='font-medium'>Patient ID:&nbsp;</span>
                  <span className='font-mono'>1289323289</span>
                </p>
                <p>
                  <span className='font-medium'>Patient name:</span> Sally Smith
                </p>
                <p>
                  <span className='font-medium'>Sex:</span> Female
                </p>
                <p>
                  <span className='font-medium'>Age:</span> 34
                </p>
                <p>
                  <span className='font-medium'>Feels like:</span> very sharp pain when touched
                </p>
                <p>
                  <span className='font-medium'>Family history of skin cancer:</span> Yes
                </p>
              </div>
              <div className='py-6 w-5/12'>
                <img src='/sample_img.jpg' className='w-full h-auto' />
              </div>
            </div>
            <div className='my-8 flex flex-row items-center justify-center'>
              <button className='bg-indigo-500 px-4 py-1 rounded-full text-white'>
                &lsaquo; Prev
              </button>
              &emsp;
              <button className='bg-indigo-500 px-4 py-1 rounded-full text-white'>
                Next &rsaquo;
              </button>
            </div>
          </div>
          {/* bg-indigo-400 */}
        </div>
      </div>
    </>
  )
}

export default ProviderDashboard
