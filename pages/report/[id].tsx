import { useRouter } from 'next/router'
import Error from 'next/error'
import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import firebase from '../../firebase'
import { error } from '../../util/log'

const Report = () => {
  const router = useRouter()
  const { id } = router.query
  const [surveyData, setSurveyData] = useState(null)
  const [feedbackData, setFeedbackData] = useState(null)

  useEffect(() => {
    if (!id) return

    firebase
      .firestore()
      .collection('survey')
      .doc(id.toString())
      .get()
      .then(snapshot => {
        setSurveyData(snapshot.data())
      })
      
    firebase
      .firestore()
      .collection('feedback')
      .doc(id.toString())
      .get()
      .then(snapshot => {
        setFeedbackData(snapshot.data())
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
          style={{ height: '500px' }}>
            {JSON.stringify(surveyData)}
            {JSON.stringify(feedbackData)}
          </div>
      </div>
    </>
  )
}

export default Report
