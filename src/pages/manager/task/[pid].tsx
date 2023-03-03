import { useRouter } from 'next/router'
import React from 'react';
import styles from "../../../styles/task.module.css";
import { supabase } from './../../lib/supabaseClient';
import {useState} from "react";

const Task = () => {
  const router = useRouter()
  const { pid, team,  } = router.query
  const [tasksdata, setTaskdata] = useState()
  const [detail, setDetail] = useState("")
  const [steps, setSteps] = useState("")
  const [video, setVideo] = useState("")
  const complete = async() => {
    //TODO: update tasksdata with the data from taskboard
    const { error } = await supabase.from('Tasks').upsert(
        {
            team: team,
            task: pid,
            details: detail,
            steps: steps,
            video_url: video
        }).eq('team', team).eq('task', pid)
    console.log(error)

    router.back()
  }

  return (
    <>
        <div className={styles.task}>
            <p className={styles.welcome}>Welcome to Task {pid}</p>
            <p className={styles.header}>Details</p>
            <input className={styles.content} type="text"/>
            <p className={styles.header}>Steps</p>
            <input className={styles.content} type="text"/>
            <p className={styles.header}>Video URL</p>
            <input className={styles.content} type="text"/>
            <p className={styles.header}>Takes Approximately</p>
            <input className={styles.content} type="text"/>
            <button className={styles.button} onClick={complete}>Complete</button>
        </div>
    </>
  )
}
export default Task
