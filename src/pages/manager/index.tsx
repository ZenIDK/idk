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
              {/* <Link href={`/newbie/task/x/1`}>
                <ManagerTask
                  taskNumber={1}
                  taskTitle={'Meet your team! 👨‍👨‍👧‍👦'}
                  isCompleted={true}
                />
              </Link>
              <Link href={`/newbie/task/x/2`}>
                <ManagerTask
                  taskNumber={2}
                  taskTitle={'Set up your Slack.'}
                  isCompleted={true}
                />
              </Link>
              <Link href={`/newbie/task/x/3`}>
                <ManagerTask
                  taskNumber={3}
                  taskTitle={'Set up Google Suite.'}
                  isCompleted={false}
                />
              </Link>
              <Link href={`/newbie/task/x/4`}>
                <ManagerTask
                  taskNumber={4}
                  taskTitle={'Set up Github.'}
                  isCompleted={false}
                />
              </Link>
              <Link href={`/newbie/task/x/5`}>
                <ManagerTask
                  taskNumber={5}
                  taskTitle={'Dev Environment 👨🏼‍💻'}
                  isCompleted={false}
                />
              </Link>
              <Link href={`/newbie/task/x/6`}>
                <ManagerTask
                  taskNumber={6}
                  taskTitle={' ̶W̶T̶F̶  WFH budget 🤑'}
                  isCompleted={false}
                />
              </Link> */}
              {tasks.map((tsk) => (
                <Link href={`/newbie/task/x/` + tsk["task"]}>
                    <ManagerTask
                    taskNumber={tsk["task"]}
                    taskTitle={tsk["details"]}
                    isCompleted={tsk["completed"]}
                />
                </Link>
                ))}
            </div>
            <Link href={`/manager/createtask`}>
              <button className={styles.taskBtn}>Add task</button>
            </Link>
          </div>
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
