import React from 'react'
import Postpic from '../assets/img/Rectangle 1.png'
import { FaClone,FaPlay } from 'react-icons/fa'
function UserPosts() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-5'>
        <div className='post-item relative'>
            <FaClone className='absolute top-[15px] right-[15px] text-white text-2xl'/>
            <img src={Postpic} className="w-full" alt="PostUser"/>
        </div>
        <div className='post-item relative'>
        <FaPlay className='absolute top-[15px] right-[15px] text-white text-2xl'/>
            <img src={Postpic} className="w-full" alt="PostUser"/>
        </div>
        <div className='post-item'>
            <img src={Postpic} className="w-full" alt="PostUser"/>
        </div>
        <div className='post-item'>
            <img src={Postpic} className="w-full" alt="PostUser"/>
        </div>
        <div className='post-item'>
            <img src={Postpic} className="w-full" alt="PostUser"/>
        </div>
        <div className='post-item'>
            <img src={Postpic} className="w-full" alt="PostUser"/>
        </div>
    </div>
  )
}

export default UserPosts