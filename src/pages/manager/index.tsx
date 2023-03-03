import { useEffect, useState } from 'react'
import Layout from '@/components/layout'
import TaskBox from '@/components/taskBox'
import styles from '@/styles/dashboard.module.css'
import Image from 'next/image'
import ManagerTask from '@/components/managerTask'
import Link from 'next/link'
import Progressbar from '@/components/progressbar'
import Everythingelse from '@/components/everythingelse'
import { supabase } from './../lib/supabaseClient'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

function Dashboard({ pid, task }) {
  const outstandingTaskCount: number = 6

  const [taskCount, setTaskCount] = useState('')
  useEffect(() => {
    const getTask = async () => {
      await supabase
        .from('Tasks')
        .select()
        .then((res) => console.log(res))
    }
  })
  const router = useRouter()
  const {email, team} = router.query
  let tasks = []
  for (const item of task) {
    console.log(item["details"])
    if (team === item['team']) {
        tasks.push(item)
    }
  }
  const navigate = () => {
    return router.push({
        pathname: '/manager/createtask',
        query: { email: email, team: team }
      })
  }

  const navigateTask = (task) => {
    console.log(task)
    task["email"] = email
    task["team"] = team
    return router.push({
        pathname: `/manager/task/` + task["task"],
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
          style={{ marginTop: '40px', marginBottom: '40px' }}
        >
          👋 Welcome back, John Doe!
        </h1>
        <Image
          className={styles.logo}
          src='/zendeskLogo.png'
          alt='Zendesk logo'
          width={330}
          height={330}
          priority
        />
        <div className={styles.taskContainerManager}>
          <h2 className={inter.className}>Task Manager</h2>
          <p
            className={inter.className}
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            Total onboarding task(s): {outstandingTaskCount}
          </p>
          <div className={inter.className}>
            <div className={styles.managerParentContainer}>
              {tasks.map((tsk) => (
                <a onClick={() => navigateTask(tsk)} style={{cursor: "pointer"}}>
                    <ManagerTask
                    taskNumber={tsk["task"]}
                    taskTitle={tsk["details"]}
                    isCompleted={tsk["completed"]}
                />
                </a>
                ))}
            </div>
          </div>
          <button className={styles.taskBtn} onClick={navigate}>Add task</button>
        </div>
        <div className={styles.ManagerTaskContainer2}>
          <h2 className={inter.className}>&& Everything else 🔮</h2>
          <br></br>
          <div className={inter.className}>
            <div className={styles.parentContainer2}>
              <Link href={`/glossary`}>
                <Everythingelse name={'Glossary'} icon={'/glossary.png'} />
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
