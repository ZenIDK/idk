import TaskBoard from '@/components/taskboard';
import { useRouter } from 'next/router'
import React from 'react';
import styles from "../../../styles/task.module.css";
import { supabase } from './../../lib/supabaseClient';
import {useState} from "react";

const Task = () => {
  const router = useRouter()
  const { pid } = router.query
  const [tasksdata, setTaskdata] = useState()
  console.log(router.query)
  const complete = async() => {
    //TODO: update tasksdata with the data from taskboard
    const { error } = await supabase.from('Tasks').insert(tasksdata)
    router.back()
  }

  return (
    <>
        <div className={styles.task}>
            <p className={styles.welcome}>Welcome to Task {pid}</p>
            <TaskBoard info={router.query}/>
            <button className={styles.button} onClick={complete}>Complete</button>
        </div>
    </>
  )
}
export default Task
