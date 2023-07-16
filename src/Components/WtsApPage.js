import React from 'react'
import Profile from './Profile' 
import Search from './Search'
import Chats from './Chats'
import Name from './Name'
import OpenChat from './OpenChatGirl/OpenChat'

function WtsApPage() {
    return (
        <div className='flex border-2 border-x-zinc-400'>
            <div className='pl-3 mr-7 min-[470px]:max-w-max max-[600px]:max-w-max' style={{width: '31%'}}>
                <Profile />
                <Search />
                <div className='ml-4 pt-5'>
                    <Chats
                        image='https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256642.jpg?w=768' name='Engineering Team' status='My number one priority today is...' time='8.57 AM' />
                    <Chats
                        image='https://hindify.org/wp-content/uploads/2023/06/girl-attitude-dp-pic.jpg' name='Sophia' status='Cool! I will take a look when I am...' time='9.51 AM' />
                    <Chats
                        image='https://lh3.googleusercontent.com/--mGPhXI-o8Y/VULs3aUZ_vI/AAAAAAAAAZ4/zqNrWQkBnyM/s640/DP%252520For%252520USA%252520Girl%252520MyWhatsappimages.blogspot.com%252520%252520Whats%252520app%252520photos%252520IMG_132914539452907.jpg' name='Cameron' status='Hey Charloette! I wanted to ask...' time='9.46 AM' />
                    <Chats
                        image='https://funkylife.in/wp-content/uploads/2022/09/girl-dp-image-253.jpg' name='Estelle' status='Hey Mary! I wanted to ask...' time='8.31 AM' />
                    <Chats
                        image='https://funylife.in/wp-content/uploads/2023/02/6_Boys-DP-WWW.FUNYLIFE.IN_-1024x1024.jpg' name='Dean' status='Going to log off for day. I am...' time='8.35 AM' />
                    <Chats
                        image='https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' name='Fun Committee' status='Kickball team is meeting in the...' time='Friday' />
                    <Chats
                        image='https://e1.pxfuel.com/desktop-wallpaper/886/876/desktop-wallpaper-top-35-sad-girl-pics-for-whatsapp-sad-alone-girls-for-whatsapp-dp-girls-whatsapp-dp.jpg' name='Elana' status='Cold you send over the notes...' time='Friday' />
                    <Chats
                        image='https://funkylife.in/wp-content/uploads/2022/09/boys-dp-from-funkylife-72.jpg' name='Tim' status='Going to log off for day. I am...' time='Friday' />
                </div>
            </div>
            <div className='ml-5 max-[340px]:hidden min-[680px]:visible max-[1250px]:visible' style={{width:'63%'}} >
                <Name />
                <OpenChat />
            </div>
        </div>
    )
}

export default WtsApPage;
