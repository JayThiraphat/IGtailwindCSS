import React from 'react'
import { FaBuromobelexperte,FaMapMarkedAlt,FaPlay,FaPlayCircle,FaUserTag } from 'react-icons/fa'
function Toggle() {
  return (
    <div className='border-t'>
        <ul className='flex justify-center text-center'>
            <li><a href='#'><FaBuromobelexperte/>POSTS</a></li>
            <li><a href='#'><FaMapMarkedAlt/>GUIDES</a></li>
            <li><a href='#'><FaPlay/>REELS</a></li>
            <li><a href='#'><FaPlayCircle/>VIDEOS</a></li>
            <li><a href='#'><FaUserTag/>TAGGED</a></li>
        </ul>
    </div>
  )
}

export default Toggle