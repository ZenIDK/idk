import { supabase } from './../lib/supabaseClient'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import styles from '../../styles/login.module.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function login({ manager, hiree }) {
  const router = useRouter()
  const [role, setRole] = useState()
  const bottomRef = useRef(null)
  const [email, setEmail] = useState('')
  const login = (e) => {
    e.preventDefault()
    let combined = manager.concat(hiree)
    let team = []
    for (const item of combined) {
      if (email === item['email']) {
        team.push(item['team'])
      }
    }
    console.log(team)
    if (manager?.some((item: { email: string }) => item.email === email)) {
      return router.push({
        pathname: '/manager',
        query: { email: email, team: team }
      })
    }
    if (hiree?.some((item: { email: string }) => item.email === email)) {
      return router.push({
        pathname: '/newbie',
        query: { email: email, team: team }
      })
    }
    // TODO: throw error when login fails (optional if you wanna demo)
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
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
      >
        <p className={styles.header}>Welcome to Zendesk</p>
        <div onClick={scrollToBottom}>
          <MdOutlineKeyboardArrowDown />
        </div>

        <div className={styles.login}>
          <form>
            <p className={styles.prompt}>Tell us more about yourself</p>
            <input className={styles.input} type='text'></input>
            <p className={styles.prompt}>Email Address</p>
            <input
              className={styles.email}
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <button className={styles.button} onClick={login}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  let { data: managerdata } = await supabase.from('Manager').select()
  let { data: hireedata } = await supabase.from('Hiree').select()
  return {
    props: {
      manager: managerdata,
      hiree: hireedata
    }
  }
}
