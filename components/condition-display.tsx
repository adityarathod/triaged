import { useState } from 'react'
import { Case } from '../pages/dashboard/provider'
import uuid from '../util/uuid'

const ConditionDisplay = (props: { conditionName: string; cases: Case[] }): JSX.Element => {
  const [selectedCase, setSelectedCase] = useState(0)
  const paginateCase = (forward: boolean) => {
    if (selectedCase >= props.cases.length - 1 && forward) return
    else if (selectedCase <= 0 && !forward) return
    setSelectedCase(selectedCase + (forward ? 1 : -1))
  }

  if (!props.cases) {
    return (
      <div className='flex-1 h-full px-10 py-4'>
        <h4 className='text-gray-500 text-xl'>No cases</h4>
      </div>
    )
  }

  return (
    <div className='flex-1 h-full px-10 py-4'>
      <h2 className='text-3xl font-medium'>Possible {props.conditionName} Cases</h2>
      <div className='w-full flex flex-row'>
        <div className='flex-1 py-6'>
          <p>
            <span className='font-medium'>Patient ID:&nbsp;</span>
            <span className='font-mono'>
              {new String(
                Math.log(
                  parseInt(
                    props.cases[selectedCase].full_name
                      .split('')
                      .map(x => x.charCodeAt(0))
                      .join('')
                  )
                )
              ).replace('.', '')}
            </span>
          </p>
          <p>
            <span className='font-medium'>Patient name:&nbsp;</span>
            {props.cases[selectedCase].full_name}
          </p>
          <p>
            <span className='font-medium'>Sex:&nbsp;</span> Female
          </p>
          <p>
            <span className='font-medium'>Age:&nbsp;</span> 34
          </p>
          <p>
            <span className='font-medium'>Feels like:&nbsp;</span>
            {props.cases[selectedCase].blemish_feel}
          </p>
          <p>
            <span className='font-medium'>Family history of skin cancer:&nbsp;</span>
            {props.cases[selectedCase].family_related === 'False' ? 'No' : 'Yes'}
          </p>
        </div>
        <div className='py-6 w-5/12'>
          <img src={props.cases[selectedCase].image_link} className='w-full h-auto' />
        </div>
      </div>
      <div className='my-8 flex flex-row items-center justify-center'>
        <button
          className='bg-indigo-500 px-4 py-1 rounded-full text-white'
          onClick={() => paginateCase(false)}>
          &lsaquo; Prev
        </button>
        &emsp;
        <button
          className='bg-indigo-500 px-4 py-1 rounded-full text-white'
          onClick={() => paginateCase(true)}>
          Next &rsaquo;
        </button>
      </div>
    </div>
  )
}

export default ConditionDisplay
