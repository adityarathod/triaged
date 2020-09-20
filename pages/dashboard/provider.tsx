import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Navbar from '../../components/navbar'
import { info } from '../../util/log'
import uuid from '../../util/uuid'
import firebase from '../../firebase'
import { ProbableConditionNames, ProbableConditions } from '../../constants'
import ConditionDisplay from '../../components/condition-display'

const TabBtn = (props: {
  type: string
  active?: boolean
  isTop?: boolean
  onClick: () => void
}) => {
  return (
    <div
      className={classNames(
        'px-6',
        'py-4',
        'cursor-pointer',
        props.active && 'bg-indigo-500',
        props.active && 'text-white',
        'font-medium',
        props.isTop && 'rounded-tl-lg',
        !props.active && 'hover:bg-gray-100'
      )}
      style={{ userSelect: 'none' }}
      onClick={props.onClick}>
      {props.type}
    </div>
  )
}

export interface Case {
  blemish_feel: string
  date: number
  email: string
  family_related: string
  full_name: string
  image_link: string
  phone: number
  age: number
  sex: string
  probable_condition: keyof typeof ProbableConditions
  submission: string
}

const ProviderDashboard = () => {
  const [selectedTabIdx, changeSelectedTabIdx] = useState(0)
  const [cases, setCases] = useState<Map<keyof typeof ProbableConditions, Case[]>>(null)

  const tabClick = (idx: number) => {
    info('hello')
    changeSelectedTabIdx(idx)
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('survey')
      .get()
      .then(snapshot => {
        const z: any = {}
        snapshot.docs
          .map(x => x.data()) // return data as object
          .map(y => {
            const pc = y['probable_condition']
            console.log(pc)
            if (!(pc in z)) {
              z[pc] = [y]
            } else {
              z[pc].push(y)
            }
          })
        setCases(z)
      })
  }, [])

  const conditions: (keyof typeof ProbableConditions)[] = [
    'mel',
    'akiec',
    'bcc',
    'bkl',
    'df',
    'nv',
    'vasc',
  ]

  return (
    <>
      <Navbar />
      <div className='mt-2 px-32'>
        <h1 className='text-4xl font-bold'>Provider Dashboard</h1>
        <hr className='my-4' />
        <div className='w-full flex flex-row shadow-md rounded-lg' style={{ height: '500px' }}>
          <div className='w-3/8 h-full rounded-tl-lg rounded-bl-lg flex flex-col overflow-scaroll text-center'>
            {conditions.map((cond, i) => (
              <TabBtn
                key={i}
                type={ProbableConditionNames[cond]}
                active={i === selectedTabIdx}
                isTop={i === 0}
                onClick={() => tabClick(i)}
              />
            ))}
          </div>
          {cases != null && (
            <ConditionDisplay
              conditionName={ProbableConditionNames[conditions[selectedTabIdx]]}
              cases={cases[conditions[selectedTabIdx]]}
            />
          )}
          {/* bg-indigo-400 */}
        </div>
      </div>
    </>
  )
}

export default ProviderDashboard
