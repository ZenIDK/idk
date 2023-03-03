import { supabase } from './../lib/supabaseClient'
import styles from '@/styles/task.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const CreateTask = ({task}) => {
  const router = useRouter()
  const [taskTitle, setTaskTitle] = useState('')
  const [steps, setSteps] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [estimatedTime, setEstimatedTime] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
  const { email, team} = router.query

  const handleSubmit = (event) => {
    event.preventDefault()
    addTask()
    router.back()
  }

  const addTask = async () => {
    let tasknum = 1
    for (const item of task) {
        if (team === item["team"]) {
            tasknum++
        }
    }
    const {error} = await supabase
      .from('Tasks')
      .insert({
        team: team,
        task: tasknum,
        details: taskTitle ,
        steps: steps,
        video_url: videoUrl 
      })
    console.log(error)
  }
  return (
    <>
      <div className={styles.task}>
        <p className={styles.welcome}>📜 Creating a task ...</p>
        <div className={styles.createTaskContainer}>
          <form onSubmit={handleSubmit}>
            <label>
              <div className={styles.header}>Task Title</div>
              <div className={styles.content}>
                <input 
                className={styles.content} 
                type='text'
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}/>
              </div>
            </label>
            <br />
            <label>
              <div className={styles.header}>Steps</div>
              <input
                type='text'
                value={steps}
                onChange={(event) => setSteps(event.target.value)}
                className={styles.content}
                />
            </label>
            <br />
            <label>
              <div className={styles.header}>Video URL</div>
              <input
                type='text'
                value={videoUrl}
                onChange={(event) => setVideoUrl(event.target.value)}
                className={styles.content}
                />
            </label>
            <br />
            <label>
              <div className={styles.header}>Takes approximately...</div>
              <input
                type='text'
                value={estimatedTime}
                onChange={(event) => setEstimatedTime(event.target.value)}
                className={styles.content}
              />
            </label>
            <br />
            <label>
              <div className={styles.header}>Additional info</div>
              <input
                value={additionalInfo}
                onChange={(event) => setAdditionalInfo(event.target.value)}
                className={styles.content}
                />
            </label>
            <br />
            <button className={styles.button} type='submit'>
              SUBMIT
            </button>
          </form>
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


export default CreateTask
