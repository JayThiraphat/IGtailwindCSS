import React from 'react'
import Profilepic1 from '../assets/img/Profile-pic1.png'
import Profilepic2 from '../assets/img/Profile-pic2.png'
function Story() {
  return (
    <div>
        <ul className='flex flex-wrap text-center my-5 ml-[35px]'>
            <li className='mr-[30px] p-[10px]'>
                <img src={Profilepic1} className="w-16 md:w-16 lg:w-16 border-4 rounded-full border-slate-100" alt = "story img"/>
                <p>Made Us</p>
            </li>
            <li className='mr-[30px] p-[10px]'>
                <img src={Profilepic2} className="w-16 md:w-16 lg:w-16 border-4 rounded-full border-slate-100" alt = "story img"/>
                <p>Made Us</p>
            </li>
            <li className='mr-[30px] p-[10px]'>
                <img src={Profilepic1} className="w-16 md:w-16 lg:w-16 border-4 rounded-full border-slate-100" alt = "story img"/>
                <p>Made Us</p>
            </li>
            <li className='mr-[30px] p-[10px]'>
                <img src={Profilepic2} className="w-16 md:w-16 lg:w-16 border-4 rounded-full" alt = "story img"/>
                <p>Made Us</p>
            </li>
            <li className='mr-[30px] p-[10px]'>
                <img src={Profilepic2} className="w-16 md:w-16 lg:w-16 border-4 rounded-full" alt = "story img"/>
                <p>Made Us</p>
            </li>
            <li className='mr-[30px] p-[10px]'>
                <img src={Profilepic2} className="w-16 md:w-16 lg:w-16 border-4 rounded-full" alt = "story img"/>
                <p>Made Us</p>
            </li>
        </ul>
    </div>
  )
}

export default Story