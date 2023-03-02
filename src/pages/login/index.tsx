import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import styles from "../../styles/login.module.css";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
 

export default function login() {
  const router = useRouter();
  const [role, setRole] = useState();
  const bottomRef = useRef(null);
  const login = async(event) => {
    event.preventDefault()
    
    const data = {
      email: event.target.email.value,
    }

    const jsonData = JSON.stringify(data)
    //DB endpoint, if needed
    const endpoint = ''
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData
    }

    const response = await fetch(endpoint, options)

    //use response to determine role

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
            <input className={styles.email} type="text" id="email" name="email" required></input>
            <br />
            <button className={styles.button} onClick={login}>LOGIN</button>
          </form>
        </div>
      </Layout>
    </>
  )
}
