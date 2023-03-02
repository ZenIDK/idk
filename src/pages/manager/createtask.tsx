import { supabase } from './../lib/supabaseClient'
import styles from '@/styles/createtask.module.css'
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column'
        }}
        className={inter.className}
      >
        <h1 style={{ marginTop: '40px', marginBottom: '40px' }}>
          📜 Creating a task ...
        </h1>
        <div className={styles.createTaskContainer}>
          <form onSubmit={handleSubmit}>
            <label>
              <div className={styles.title}>Task Title</div>
              <input
                type='text'
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                className={styles.inputBoxTask}
                placeholder='              Short and sweet... like "Request for zendesk_console repo access"'
              />
            </label>
            <br />
            <label>
              <div className={styles.title}>Steps</div>
              <input
                type='text'
                value={steps}
                onChange={(event) => setSteps(event.target.value)}
                className={styles.inputBoxSteps}
                placeholder='     In point form, like: 1. Go to xxx.com   2. Click on xxx'
              />
            </label>
            <br />
            <label>
              <div className={styles.title}>Video URL</div>
              <input
                type='text'
                value={videoUrl}
                onChange={(event) => setVideoUrl(event.target.value)}
                className={styles.inputBoxVideo}
                placeholder='                             www.youtube.com/watch/fireship/dockerin60secs'
              />
            </label>
            <br />
            <label>
              <div className={styles.title}>Takes approximately...</div>
              <input
                type='text'
                value={estimatedTime}
                onChange={(event) => setEstimatedTime(event.target.value)}
                className={styles.inputBoxETA}
                placeholder='                                                            60 minutes'
              />
            </label>
            <br />
            <label>
              <div className={styles.title}>Additional info</div>
              <input
                value={additionalInfo}
                onChange={(event) => setAdditionalInfo(event.target.value)}
                className={styles.inputBoxETC}
                placeholder='                                                             Chill out'
              />
            </label>
            <br />
            <button className={styles.submitBtn} type='submit'>
              Submit
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
