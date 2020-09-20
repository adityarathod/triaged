import { useRouter } from 'next/router'
import Error from 'next/error'
import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import firebase from '../../firebase'
import { error } from '../../util/log'

const Report = () => {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!id) return
    firebase
      .firestore()
      .collection('survey')
      .doc(id.toString())
      .get()
      .then(snapshot => {
        setData(snapshot.data())
      })
  }, [id])

  return (
    <>
      <Navbar />
      <div className='mt-2 px-32'>
        <h1 className='text-4xl font-bold'>Skin Report</h1>
        <hr className='my-4' />
        <div
          className='w-full flex flex-row shadow-md rounded-lg'
          style={{ height: '500px' }}></div>
      </div>
    </>
  )
}

export default Report
