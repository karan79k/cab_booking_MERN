import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/Userlogin'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
const App = () => {
  return (
    <div className='text-2xl'>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path='/userlogin' element={<UserLogin />} />
      <Route path='/usersignup' element={<UserSignup />} />
      <Route path='/captainlogin' element={<CaptainLogin/>}/>
      <Route path='/captainsignup' element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App