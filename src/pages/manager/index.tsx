import { useEffect } from 'react'
import Layout from '@/components/layout'
import TaskBoxManager from '@/components/taskBoxManager'
import ProgressBar from '@/components/progressbar'

function Dashboard() {
  return (
    <>
      <h1 className='newbie'>👋 Welcome back, Jay!</h1>
      <div className='mainContainer'>
        <div className='taskContainer'>
          <h2
            style={{
              marginLeft: '30px',
              marginTop: '30px',
              textAlign: 'center'
            }}
          >
            Team Falcon onboarding task(s)
          </h2>
          <TaskBoxManager />
          <p>Jonathan's onboarding progress: </p>
          <ProgressBar />
        </div>
      </div>

      {/* <Layout></Layout> */}
    </>
  )
}

export default Dashboard
