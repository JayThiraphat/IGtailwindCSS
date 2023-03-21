import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Toggle from './components/Toggle'
import UserInfo from './components/UserInfo'
import UserPosts from './components/UserPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <div className='w-full md:w-[60rem] lg:w-[60rem] mx-auto'>
        <UserInfo/>
        <Story/>
        <Toggle/>
        <UserPosts/>
      </div>
      
    </div>
    
  )
}

export default App
