import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'layouts/app-page-layout/header'
import Sidebar from 'layouts/app-page-layout/sidebar'
/* -------------------------------------------------------------------------- */

export default function AppPageLayout() {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="container mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
