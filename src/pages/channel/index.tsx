import { useState } from "react";
import Navbar from "@/components/navbar";
import styles from "../../styles/channel.module.css";

export default function Channel() {
    const [channel, setChannel] = useState();
    const submit = async() => {
        //TODO: Get keyword from db, setChannel if exist in db
    }

    const Results = () => {
        return (
            <p>You can try the {channel} channel</p>
        );   
    }

    return (
        <>
            <Navbar/>
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
            </div>
        </>
    )
}

