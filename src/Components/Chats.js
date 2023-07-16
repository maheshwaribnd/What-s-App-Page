import React from 'react'

function Chats({ image, name, status, time }) {
  return (

    <div className='flex justify-between pb-3 min-[470px]: gap-6 max-[680px]: gap-6'>
      <div className='flex gap-4'>
        <img src={image} className='w-10 h-10 rounded-full' alt='' />
        <div>
          <h4 className='font-bold'>{name}</h4>
          <p className='text-slate-700 text-sm'>{status}</p>
        </div>
      </div>
      <div>
        <p className='text-slate-700 text-sm'>{time}</p>
      </div>
    </div>
  )
}

export default Chats
