import { useState, useEffect } from 'react'
import styles from '../styles/task.module.css'
import { Inter } from 'next/font/google'
import { supabase } from '../pages/lib/supabaseClient'

const inter = Inter({ subsets: ['latin'] })

export default function TaskBoard(props) {
  const team = props.info.team
  const task = props.info
  const email = props.info.email
  const [details, setDetails] = useState(task["details"])
  const [steps, setSteps] = useState(task["steps"])
  const [video, setVideo] = useState(task["video_url"])
  const [isLoading, setLoading] = useState(false)

  console.log(props)

//   //DB endpoint
//   const details_endpoint = ''
//   useEffect(() => {
//     setLoading(true)
//     fetch(details_endpoint)
//       .then((res) => res.json())
//       .then((data) => {
//         setDetails(data)
//         setLoading(false)
//       })
//   }, [])

//   const steps_endpoint = ''
//   useEffect(() => {
//     setLoading(true)
//     fetch(steps_endpoint)
//       .then((res) => res.json())
//       .then((data) => {
//         setSteps(data)
//         setLoading(false)
//       })
//   }, [])

//   const video_endpoint = ''
//   useEffect(() => {
//     setLoading(true)
//     fetch(video_endpoint)
//       .then((res) => res.json())
//       .then((data) => {
//         setVideo(data)
//         setLoading(false)
//       })
//   }, [])

//   if (isLoading) return <p>Loading...</p>

  return (
    <>
      <p className={styles.header}>Details</p>
      <div className={styles.content}>
        <p className={styles.details}>{details}</p>
      </div>
      <p className={styles.header}>Steps</p>
      <div className={styles.content}>
        <p className={styles.steps}>{steps}</p>
      </div>
      <p className={styles.header}>Video URL</p>
      <div className={styles.content}>
        <p className={styles.video}>{video}</p>
      </div>
      <p className={styles.header}>Takes Approximately</p>
      <div className={styles.content}>
        <p className={styles.video}>60 minutes</p>
      </div>
    </>
  )
}
