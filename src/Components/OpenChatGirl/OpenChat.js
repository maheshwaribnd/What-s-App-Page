import React from 'react'
import EstelleChat from './EstelleChat';
import MaryChat from './MaryChat';
import MaryType from './MaryType';


function OpenChat() {
  return (
    <div className='h-5/6 pt-3 pb-24 px-5 rounded-xl' style={{ backgroundColor: '#F6F6F6' }}>
      <EstelleChat />
      <MaryChat chat='Yeah that makes sense to me. I will let the team know.' />
      <div className='mt-28'>
        <EstelleChat />
      </div>
      <p className='text-slate-800 flex justify-center font-semibold pt-1 pb-1 text-sm'>Thursday <span className='text-slate-600 font-normal pl-2'> Dec 15</span></p>
      <MaryChat chat='That works for me. I will set a remainder.' />
      <div className='mt-40'>
        <MaryType />
      </div>
    </div>

  )
}

export default OpenChat;
