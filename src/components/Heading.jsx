import React from 'react'

function Heading({title, subHead}) {
  return (
    <div className='text-stone-400 p-2'>
    <div className='flex text-sm font-extrabold items-center relative w-max uppercase pr-2'>
      <h2>{title}</h2>
      <div className='h-[1px] w-20 flex items-center accent-bg absolute left-full top-1/2'></div>
    </div>
    <p className='font-extrabold uppercase text-4xl text-white'>{subHead}</p>
    </div>
  )
}

export default Heading
