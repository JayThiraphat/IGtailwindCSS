import React from 'react'
import Profilepic from '../assets/img/Profile picture.png'
import Profilemypic from '../assets/img/Profilemypic.png'

import { FaEllipsisH } from 'react-icons/fa'

function UserInfo() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row md:h-40 lg:h-40 mt-10'>
        <div className="profile-pic w-full md:w-80  lg:w-80 mb-5 lg:m-0 flex  justify-center">
            <img src={Profilemypic} alt="Profilepic1"/>
        </div>
        <div className="profile-info w-full">
            <div className="info-top flex items-center justify-center lg:justify-start md:justify-start">
                <h2 className='text-2xl mr-[20px]'>Thiraphat</h2>
                <button className='bg-[#0095F6] py-2 px-6 text-white rounded-md mr-[20px]'>Follow</button>
                <a href='#'><FaEllipsisH/></a>
            </div>
            <div className="info-middle flex my-5 justify-center lg:justify-start md:justify-start">
                <p className='mr-[20px]'>1.324 posts</p>
                <p className='mr-[20px]'>4M followers</p>
                <p className='mr-[20px]'>0 following</p>
            </div>
            <div className="info-bottom text-center md:text-left lg:text-left">
                <p>Thiraphat</p>
            </div>
        </div>
    </div>
  )
}

export default UserInfo