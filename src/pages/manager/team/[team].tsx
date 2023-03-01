import { useRouter } from 'next/router'

const Team = () => {
  const router = useRouter()
  const { tid } = router.query

  return <p>team: {tid}</p>
}

export default Team
