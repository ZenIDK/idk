import { useRouter } from 'next/router'

const Task = () => {
  const router = useRouter()
  const { tid } = router.query

  return <p>task: {tid}</p>
}

export default Task
