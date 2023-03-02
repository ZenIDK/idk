import TaskBoard from '@/components/taskboard';
import { useRouter } from 'next/router'
import styles from "../../../styles/task.module.css";

export default function Task() {
  const router = useRouter()
  const { pid } = router.query
  const complete = async() => {
    //TODO: add new entry to completed table
    router.push('/newbie')
  }

  return (
    <>
        <div className={styles.task}>
            <p className={styles.welcome}>Welcome to Task {pid}</p>
            <TaskBoard />
            <button className={styles.button} onClick={complete}>Complete</button>
        </div>
    </>
  )
}
