import styles from '@/styles/dashboard.module.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const Everythingelse = ({ name, icon }) => {
  return (
    <>
      <div className={styles.childTask}>
        <div className={styles.image}>
          <Image src={icon} width={80} alt='' height={80} priority></Image>
        </div>
        <div style={{ marginTop: '-40px', fontWeight: 'bolder' }}>{name}</div>
      </div>
    </>
  )
}

export default Everythingelse
