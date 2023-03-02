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
          <h2
            style={{
              marginLeft: '30px',
              marginTop: '30px',
              textAlign: 'center'
            }}
          >
            Task(s)
          </h2>
          <TaskBox />
        </div>
      </div>

      {/* <Layout></Layout> */}
    </>
  )
}

export default Dashboard
