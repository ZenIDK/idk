import { useState } from "react";
import Navbar from "@/components/navbar";
import styles from "../../styles/channel.module.css";
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Everythingelse from '@/components/everythingelse'


const inter = Inter({ subsets: ['latin'] })

export default function Channel() {
    const [channel, setChannel] = useState();
    const mockData = {};
    const submit = async() => {
        //TODO: Get keyword from db, setChannel if exist in mockData
    }

    const Results = () => {
        return (
            <p>You can try the {channel} channel</p>
        );   
    }

    return (
        <>
            <div className={styles.channel}>
                <p className={styles.title}>What are you looking for?</p>
                <form>
                    <input type="text" className={styles.input}/>
                    <br />
                    <button className={styles.button} onClick={submit}>Search</button>
                </form>
                <div className={styles.results}>
                    {channel ? <Results />: <p>Unfortunately, we do not have a channel for that</p>}
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

