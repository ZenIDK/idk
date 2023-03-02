import styles from '@/styles/dashboard.module.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const NewbieTask = ({ taskNumber, taskTitle, isCompleted }) => {
  if (isCompleted) {
    return (
      <div className={styles.childTask}>
        Task {taskNumber}
        <div style={{ marginTop: '20px', fontWeight: 'bolder' }}>
          {taskTitle}
        </div>
        <div style={{ marginTop: '20px' }}>✅</div>
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            right: 15,
            color: 'red',
            fontSize: 'small',
            fontWeight: 'bolder'
          }}
        >
          EDIT
        </div>
      </div>
    )
  }
  return (
    <div className={styles.childTask}>
      Task {taskNumber}
      <div style={{ marginTop: '20px', fontWeight: 'bolder' }}>{taskTitle}</div>
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          right: 15,
          color: 'red',
          fontSize: 'small',
          fontWeight: 'bolder'
        }}
      >
        EDIT
      </div>
    </div>
  )
}

export default NewbieTask
