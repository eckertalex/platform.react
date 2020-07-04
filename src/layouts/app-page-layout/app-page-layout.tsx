import React from 'react'
import { Outlet } from 'react-router-dom'
/* -------------------------------------------------------------------------- */

export default function AppPageLayout() {
  return (
    <main className="container mx-auo">
      <Outlet />
    </main>
  )
}
