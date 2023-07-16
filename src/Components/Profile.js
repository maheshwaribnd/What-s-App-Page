import React from 'react'

function Profile() {
  return (
    <div className='flex justify-between mt-3 mb-3 pb-1 ml-4 mr-1'>
      <div className='flex gap-3'>
        <img className='w-10 h-10 mt-1 rounded-full' src="https://cdn.statusqueen.com/dpimages/thumbnail/dp_image20-785.jpg" alt="" />
        <div>
          <h2 className='font-bold'>Mary Roberts</h2>
          <p className='text-sm'>Not available till 01/01/2023</p>
        </div>
      </div>
      <div className='mt-3 ml-4 flex justify-center items-center w-10 h-7 text-center bg-slate-100 rounded-md min-[470px]: mr-5 max-[680px]: mr-5' >
        <h2 className='text-xl font-bold pb-3'>...</h2>
      </div>
    </div>
  )
}

export default Profile;
