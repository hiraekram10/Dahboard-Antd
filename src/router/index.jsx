import React from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import About from '../Pages/About'
import Dashboard from '../Pages/Dashboard'
import AppLayout from '../Components/Layout'
import PageNotFound from '../Pages/PageNotFount'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import { useState,useEffect } from 'react'
import Projects from '../Pages/Projects'
import ProjectList from '../Pages/ProjectList'
import ProjectCreate from '../Pages/ProjectCreate'
import LetterBox from '../Pages/LetterBox'


const AppRouter = () => {


  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<AppLayout><Home/></AppLayout>} />
        {/* nested project routes */}
        <Route path="/projects/list" element={<AppLayout><ProjectList/></AppLayout>} />
        <Route path="/projects/create" element={<AppLayout><ProjectCreate /></AppLayout>} />
        <Route path="/letterbox" element={<AppLayout><LetterBox/></AppLayout>} />
      <Route path="/dashboard" element={<AppLayout><Dashboard/></AppLayout>} />
      <Route path="/about" element={<AppLayout><About/></AppLayout>} />
      <Route path="/profile" element={<AppLayout><Profile/></AppLayout>} />
      <Route path="login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default AppRouter
