import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../feature/auth/pages/login'
import Register from '../feature/auth/pages/register'
import { LayoutHome } from '../feature/dashboard/layout'
import { Home } from '../feature/dashboard/pages/home/home'
import { Users } from '../feature/dashboard/pages/users/users'

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='dashboard' element={<LayoutHome />}>
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users />} />
      </Route>

    </Routes>
  )
}
