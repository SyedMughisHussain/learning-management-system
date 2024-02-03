import React from 'react'
import { Outlet } from 'react-router-dom'
import PersistentDrawerLeft from '../../components/Drawer'

const AdminDashboard = () => {
  return (
    <>
    <PersistentDrawerLeft />
    <Outlet />
    </>
  )
}

export default AdminDashboard