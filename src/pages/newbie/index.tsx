import { useEffect } from 'react'
import Layout from '@/components/layout'
import TaskBox from '@/components/taskBox'
import { useRouter } from 'next/router'
import styles from '@/styles/dashboard.module.css'
import Image from 'next/image'
import NewbieTask from '@/components/task'
import Link from 'next/link'
import Progressbar from '@/components/progressbar'
import Everythingelse from '@/components/everythingelse'

import { Inter } from 'next/font/google'
import { supabase } from '../lib/supabaseClient'

const inter = Inter({ subsets: ['latin'] })

function Dashboard({ pid, task }) {
  const outstandingTaskCount: number = 4
  const router = useRouter()
  const {email, team} = router.query
  let taskCount = 0
  let tasks = []
  for (const item of task) {
    console.log(item["details"])
    if (team === item['team']) {
        tasks.push(item)
    }
  }
  taskCount = tasks.length
  const navigate = (task) => {
    console.log(task)
    task["email"] = email
    task["team"] = team
    return router.push({
        pathname: `/newbie/task/x/` + task["task"],
        query: task
      })
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column'
        }}
      >
        <h1
          className={inter.className}
          style={{ marginTop: '40px', marginBottom: '40px', color: 'white' }}
        >
          👋 Welcome to Zendesk, Jonathan!
        </h1>
        <Image
          className={styles.logo}
          src='/zendeskLogo.png'
          alt='Zendesk logo'
          width={330}
          height={330}
          priority
        />
        <div className={styles.taskContainer}>
          <h2 className={inter.className}>
            Task(s) <span>-&gt;</span>
          </h2>
          <p
            className={inter.className}
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            Outstanding onboarding task(s) : {taskCount}
          </p>
          <div className={inter.className}>
            <div className={styles.parentContainer}>
              
              {tasks.map((tsk) => (
                <a onClick={() => navigate(tsk)} style={{cursor: "pointer"}}>
                    <NewbieTask
                    taskNumber={tsk["task"]}
                    taskTitle={tsk["details"]}
                    isCompleted={tsk["completed"]}
                    
                />
                </a>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.taskContainer2}>
          <h2 className={inter.className}>&& Everything else 🔮</h2>
          <br></br>
          <div className={inter.className}>
            <div className={styles.parentContainer2}>
              <Link href={`/glossary`}>
                <Everythingelse name={'Glossary'} icon={'/glossary.png'}/>
              </Link>
              <Link href={`/channel`}>
                <Everythingelse name={'Channels'} icon={'/slack-logo.png'} />
              </Link>
              <Link href={`/newbie`}>
                <Everythingelse name={'Your Team'} icon={'/teamwork.png'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
    const {data, error} = await supabase.from("Tasks").select().order("task")
    console.log(data)
    return {
      props: {
       task: data
      },
    }
  }

export default Dashboard
