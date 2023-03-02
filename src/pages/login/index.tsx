import { supabase } from './../lib/supabaseClient';
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import styles from "../../styles/login.module.css";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
 

export default function login({manager, hiree}) {
  const router = useRouter();
  const [role, setRole] = useState();
  const bottomRef = useRef(null);
  const [email, setEmail] = useState("");
  const login = (e) => {
    e.preventDefault()
    if (manager?.some((item: { email: string; }) => item.email === email)) {
        return router.push('/manager')
    }
    if (hiree?.some((item: { email: string; }) => item.email === email)) {
        return router.push('/newbie')
    }
    // TODO: Get role from db
    // if role == manager, router.push('/manager')
    // else, router.push('/newbie')
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <p className={styles.header}>Welcome to Zendesk</p>
      <div onClick={scrollToBottom}><MdOutlineKeyboardArrowDown/></div>
      <Layout>
        <div className={styles.login}>
          
          <form>
            <p className={styles.prompt}>Tell us more about yourself</p>
            <input className={styles.input} type="text"></input>
            <p className={styles.prompt}>Email Address</p>
            <input className={styles.email} type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
            <br />
            <button className={styles.button} onClick={login}>LOGIN</button>
          </form>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
    let { data: managerdata } = await supabase.from('Manager').select()
    let { data:hireedata } = await supabase.from('Hiree').select()
    return {
      props: {
       manager: managerdata,
       hiree: hireedata
      },
    }
  }
  