import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

 
export default function Navbar() {
    return (
        <nav className={styles.mainnav}>
            <div className={styles.team}>
                <Link href='/'>iDK.</Link>
            </div>
            <div className={styles.list}>
                <Link className={styles.item} href='/newbie'>Tasks</Link>
                <Link className={styles.item} href='/glossary'>Glossary</Link>
                <Link className={styles.item} href='/channel'>Channels</Link>
            </div>
        </nav>
    )
}
