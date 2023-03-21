import React from 'react'
import Logo from '../assets/img/Instagram_logo.png'
import Profilepic from '../assets/img/Profile picture.png'
import { FaHome,FaFacebookMessenger,FaPlusSquare,FaRegCompass,FaRegHeart } from 'react-icons/fa';

function Navbar() {
  return (
    <div>
        <nav className='border border-b'>
            <div className='w-full md:w-[60rem] lg:w-[60rem] mx-auto'>
                <div className='flex justify-between max-[639px]:flex-col sm:flex-col md:flex-row lg:flex-row sm:h-32  md:h-16 lg:h-16 py-4 items-center'>
                    <div className="logo">
                        <img className='' src={Logo} alt="Instagram_logo" />
                    </div> 
                    <div className="search">
                        <input className='border p-1 px-3' type="text" placeholder='Search'/>
                    </div>
                    <ul className="menus flex">
                        <li className='ml-5'><a href='#' className='text-2xl'><FaHome/></a></li>
                        <li className='ml-5'><a href='#' className='text-2xl'><FaFacebookMessenger/></a></li>
                        <li className='ml-5'><a href='#' className='text-2xl'><FaPlusSquare/></a></li>
                        <li className='ml-5'><a href='#' className='text-2xl'><FaRegCompass/></a></li>
                        <li className='ml-5'><a href='#' className='text-2xl'><FaRegHeart/></a></li>
                        <li className='ml-5 w-7 h-7'><img  className='text-2xl' src={Profilepic} alt="Profilepic"/></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar