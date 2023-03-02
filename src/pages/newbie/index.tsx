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

const inter = Inter({ subsets: ['latin'] })

function Dashboard({ pid }) {
  const outstandingTaskCount: number = 4
  const router = useRouter()
  console.log(router.query)

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
            Outstanding onboarding task(s) : {outstandingTaskCount}
          </p>
          <div className={inter.className}>
            <div className={styles.parentContainer}>
              <Link href={`/newbie/task/x/1`}>
                <NewbieTask
                  taskNumber={1}
                  taskTitle={'Meet your team! 👨‍👨‍👧‍👦'}
                  isCompleted={true}
                />
              </Link>
              <Link href={`/newbie/task/x/2`}>
                <NewbieTask
                  taskNumber={2}
                  taskTitle={'Set up your Slack.'}
                  isCompleted={true}
                />
              </Link>
              <Link href={`/newbie/task/x/3`}>
                <NewbieTask
                  taskNumber={3}
                  taskTitle={'Set up Google Suite.'}
                  isCompleted={false}
                />
              </Link>
              <Link href={`/newbie/task/x/4`}>
                <NewbieTask
                  taskNumber={4}
                  taskTitle={'Set up Github.'}
                  isCompleted={false}
                />
              </Link>
              <Link href={`/newbie/task/x/5`}>
                <NewbieTask
                  taskNumber={5}
                  taskTitle={'Dev Environment 👨🏼‍💻'}
                  isCompleted={false}
                />
              </Link>
              <Link href={`/newbie/task/x/6`}>
                <NewbieTask
                  taskNumber={6}
                  taskTitle={' ̶W̶T̶F̶  WFH budget 🤑'}
                  isCompleted={false}
                />
              </Link>
              {/* <NewbieTask taskNumber={7} /> */}
              {/* <NewbieTask /> */}
            </div>
          </div>
        </div>
        <div className={styles.taskContainer2}>
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

export default Dashboard
