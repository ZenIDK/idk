import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import styles from "../../styles/login.module.css";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
 

export default function login() {
  const router = useRouter();
  const [role, setRole] = useState();
  const bottomRef = useRef(null);
  const login = async() => {
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
            <input className={styles.email} type="text"></input>
            <br />
            <button className={styles.button} onClick={login}>LOGIN</button>
          </form>
        </div>
      </Layout>
    </>
  )
}
