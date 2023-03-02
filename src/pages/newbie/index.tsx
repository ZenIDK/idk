import { useEffect } from 'react'
import Layout from '@/components/layout'
import TaskBox from '@/components/taskBox'

function Dashboard() {
  console.log('hi')

  return (
    <>
      <h1 className='newbie'>👋 Welcome to Zendesk, Jonathan!</h1>
      <div className='mainContainer'>
        <div className='taskContainer'>
          <div>Task(s)</div>
          <TaskBox />
        </div>
      </div>
      <Layout></Layout>
    </>
  )
}

export default Dashboard
