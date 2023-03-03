import { useState } from 'react'
import Navbar from '@/components/navbar'
import styles from '../../styles/channel.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Everythingelse from '@/components/everythingelse'

const inter = Inter({ subsets: ['latin'] })

export default function Channel() {
  const [channel, setChannel] = useState()
  const [isShown, setIsShown] = useState(false)
  const mockData = {}

  const handleClick = (event) => {
    event.preventDefault()
    // 👇️ toggle shown state
    setChannel(event.value)
    setIsShown((current) => !current)

    // 👇️ or simply set it to true
    // setIsShown(true);
  }

  const Results = () => {
    return (
      <p>
        You can try the <span style={{ color: 'purple' }}>#ask-{channel}</span>{' '}
        channel, on Slack. 🙌
      </p>
    )
  }

  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     if (channel === 'falcon') {
  //     }
  //   }

  return (
    <>
      <div className={inter.className}>
        <div className={styles.channel}>
          <p className={styles.title}>What are you looking for?</p>
          <form>
            <input
              type='text'
              className={styles.input}
              onChange={(event) => setChannel(event.target.value)}
            />
            <br />
            {/* <button className={styles.button} onClick={handleClick}>
              Search
            </button> */}
          </form>

          {/* {isShown && <Results />} */}
          <div className={styles.results}>
            {channel ? (
              <Results />
            ) : (
              <p>Unfortunately, we do not have a channel for that! 😪</p>
            )}
          </div>

          <div className={styles.taskContainer2}>
            <h2 className={inter.className}>&& Everything else 🔮</h2>
            <br></br>
            <div className={inter.className}>
              <div className={styles.parentContainer2}>
                <Link href={`/glossary`}>
                  <Everythingelse name={'Glossary'} icon={'/glossary.png'} />
                </Link>
                <Link href={`/channel`}>
                  <Everythingelse name={'Channels'} icon={'/slack-logo.png'} />
                </Link>
                <Link href={`/newbie`}>
                  <Everythingelse name={'Your Team'} icon={'/teamwork.png'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
