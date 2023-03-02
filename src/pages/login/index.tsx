import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import styles from "../../styles/login.module.css";


export default function login() {
  const router = useRouter();
  const [role, setRole] = useState();
  const login = async() => {
    // TODO: Get role from db
    // if role == manager, router.push('/manager')
    // else, router.push('/newbie')
  }

  return (
    <>
      
      <Layout>
        <div className={styles.login}>
          <p className={styles.header}>Welcome to Zendesk</p>
          <p className={styles.prompt}>Tell us more about yourself</p>
          <input className={styles.input} type="text"></input>
          <p className={styles.prompt}>Email Address</p>
          <input className={styles.email} type="text"></input>
          <br />
          <button className={styles.button} onClick={login}>LOGIN</button>
        </div>
      </Layout>
    </>
  )
}
