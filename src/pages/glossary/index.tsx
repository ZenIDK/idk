import Navbar from "@/components/navbar";
import styles from "../../styles/glossary.module.css";
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Everythingelse from '@/components/everythingelse'


const inter = Inter({ subsets: ['latin'] })

export default function Glossary() {
    const mockData = {"ZDI": "Zendesk Development Interface", "Zopim": "The company Zendesk acquired and rebranded to Zendesk Chat", "a":"A", "b":"B"}

    return (
        <>
            <div className={styles.glossary}>
                <h1 className={styles.title}>
                    Looking for Terminologies?!
                </h1>
                <div className={styles.outer}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <p>Term</p>
                            <p>Definition</p>
                        </div>
                        {Object.keys(mockData).map((key, index) => {
                            return (
                                <div className={styles.pair} key={index}>
                                    <p className={styles.item}>{key}</p>
                                    <p className={styles.definition}>{mockData[key]}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.taskContainer2}>
                    <h2 className={inter.className}>&& Everything else 🔮</h2>
                    <br></br>
                    <div className={inter.className}>
                        <div className={styles.parentContainer2}>
                            <Link href={`/glossary`}>
                                <Everythingelse name={'Glossary'} icon={'/glossary.png'}/>
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
        </>
    )
}