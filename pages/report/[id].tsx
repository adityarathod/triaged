import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import firebase from '../../firebase'
import { Case } from '../dashboard/provider'

interface Feedback {
  immediate_attention: string
  in_person: string
  next_steps: string
}

const Report = () => {
  const router = useRouter()
  const { id } = router.query
  const [caseData, setCaseData] = useState<Case>(null)
  const [feedbackData, setFeedbackData] = useState<Feedback>(null)

  useEffect(() => {
    if (!id) return

    firebase
      .firestore()
      .collection('survey')
      .doc(id.toString())
      .get()
      .then(snapshot => {
        setCaseData(snapshot.data() as any) // oh god
      })

    firebase
      .firestore()
      .collection('feedback')
      .doc(id.toString())
      .get()
      .then(snapshot => {
        setFeedbackData(snapshot.data() as any) // no please not again
      })
  }, [id])

  return (
    <>
      <Navbar />
      <div className='mt-2 px-32'>
        <h1 className='text-4xl font-bold'>Skin Report</h1>
        <hr className='my-4' />

        {caseData && (
          <div
            className='w-full flex flex-col shadow-md rounded-lg  px-10 py-4'
            style={{ height: '500px' }}>
            <h2 className='text-3xl font-medium'>Report for {caseData.full_name}</h2>
            <div className='flex flex-row justify-between items-center'>
              <div className='py-6'>
                <p>
                  <span className='font-bold text-xl'>Patient Info</span>
                </p>
                <p>
                  <span className='font-medium'>Patient ID:&nbsp;</span>
                  <span className='font-mono'>{caseData.submission}</span>
                </p>
                <p>
                  <span className='font-medium'>Patient name:&nbsp;</span>
                  {caseData.full_name}
                </p>
                <p>
                  <span className='font-medium'>Sex:&nbsp;</span>
                  {caseData.sex}
                </p>
                <p>
                  <span className='font-medium'>Age:&nbsp;</span>
                  {caseData.age}
                </p>
                <p>
                  <span className='font-medium'>Feels like:&nbsp;</span>
                  {caseData.blemish_feel}
                </p>
                <p>
                  <span className='font-medium'>Family history of skin cancer:&nbsp;</span>
                  {caseData.family_related === 'False' ? 'No' : 'Yes'}
                </p>
                <p>
                  <span className='font-medium'>Austomatic classification:&nbsp;</span>
                  {caseData.probable_condition}
                </p>

                <div className='py-10'>
                  <p>
                    <span className='font-bold text-xl'>Provider Feedback</span>
                  </p>
                  {feedbackData ? (
                    <div>
                      <p>
                        <span className='font-medium'>Next Steps:&nbsp;</span>
                        {feedbackData.next_steps}
                      </p>
                      <p>
                        <span className='font-medium'>In person care:&nbsp;</span>
                        {feedbackData.in_person == 'True' ? 'Yes' : 'No'}
                      </p>
                      <p>
                        <span className='font-medium'>Requires immediate attention:&nbsp;</span>
                        {feedbackData.next_steps == 'True' ? 'Yes' : 'No'}
                      </p>
                    </div>
                  ) : (
                    <p>Awaiting provider feedback. Please check back later.</p>
                  )}
                </div>
              </div>
              <div className='py-6 w-5/12 mx-5'>
                <img src={caseData.image_link} className='w-full h-auto' />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Report
