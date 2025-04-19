import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import UserLogin from './pages/UserLogin'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import UserContext from './context/UserContext'
import UserLogout from './pages/UserLogout'
import CaptainContext from './context/CaptainContext'
import CaptainLogout from './context/CaptainLogout'

const App = () => {
  return (
    <CaptainContext>
      <UserContext>
        <div className='text-2xl'>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Start />} />
            <Route path='/userlogin' element={<UserLogin />} />
            <Route path='/usersignup' element={<UserSignup />} />
            <Route path='/captainlogin' element={<CaptainLogin/>} />
            <Route path='/captainsignup' element={<CaptainSignup/>} />

            {/* Protected Routes */}
            <Route 
              path='/home' 
              element={
                <UserProtectWrapper>
                  <Home />
                </UserProtectWrapper>
              } 
            />
            <Route 
              path='/user/logout' 
              element={
                <UserProtectWrapper>
                  <UserLogout />
                </UserProtectWrapper>
              } 
            />
            <Route 
              path='/captainhome' 
              element={
                <CaptainProtectWrapper>
                  <CaptainHome/>
                </CaptainProtectWrapper>
              } 
            />
            <Route 
              path='/captain/logout' 
              element={
                <CaptainProtectWrapper>
                  <CaptainLogout/>
                </CaptainProtectWrapper>
              } 
            />
          </Routes>
          
        </div>
      </UserContext>
    </CaptainContext>
  )
}

export default App