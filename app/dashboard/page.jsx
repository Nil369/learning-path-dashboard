import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <UserButton/>
        <h1 className='text-5xl text-indigo-600 font-bold'>DashboardPage</h1>

    </div>
  )
}

export default DashboardPage