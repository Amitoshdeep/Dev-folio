import React from 'react'

function Heading({title}) {
  return (
    <div className='flex text-stone-400 text-sm font-extrabold items-center relative w-max p-2'>
      <h2>{title}</h2>
      <div className='h-[1px] w-20 flex items-center accent-bg absolute left-full top-1/2'></div>
    </div>
  )
}

export default Heading
