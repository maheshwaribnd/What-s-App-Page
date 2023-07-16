import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ForSeen from './ForSeen';

function EstelleChat() {
    return (
        <div className='w-6/12 rounded'>
            <p className='text-slate-600 text-sm pl-14 pb-1'>Estelle 8.23 AM</p>
            <div className='flex gap-4 h-3/5'> 
                <img src="https://funkylife.in/wp-content/uploads/2022/09/girl-dp-image-253.jpg" className='w-10 h-9 rounded-full' alt='' />
                <div className='flex items-center text-sm w-full py-3 pr-1 rounded-xl bg-white'>
                    <h6 className='pl-3'>OK, let me know how I can help. Not much work to do on my end until we get the the designs finalized for the event next... <span className='text-slate-500'>more</span></h6>
                    <PlayArrowIcon className='p-1 m-1 rounded-full' style={{backgroundColor: '#F6F6F6'}}/>
                </div>
            </div>
            <ForSeen/>
        </div>
    )
}

export default EstelleChat;
