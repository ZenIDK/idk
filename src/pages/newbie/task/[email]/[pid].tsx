import TaskBoard from '@/components/taskboard'
import { useRouter } from 'next/router'
import styles from '../../../../styles/task.module.css'
import { supabase } from '../../../lib/supabaseClient'

export default function Task() {
  const router = useRouter()
  const pid = router.query.pid
  const {task, team} = router.query
  const complete = async () => {
    const { error } = await supabase
      .from('Tasks')
      .upsert({team:team, task:task, completed: true})
      .eq('team', team).eq('task', task)
    console.log(error)
    router.back()
  }

  return (
    <>
      <div className={styles.task}>
        <p className={styles.welcome}>Welcome to Task {pid}</p>
        <TaskBoard info={router.query}/>
        <button className={styles.button} onClick={complete}>
          Complete
        </button>
      </div>
    </>
  )
}
