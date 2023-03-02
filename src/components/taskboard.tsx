import { useState, useEffect } from 'react'; 
import styles from "../styles/task.module.css";


export default function TaskBoard(props) {
    const [details, setDetails] = useState();
    const [steps, setSteps] = useState();
    const [video, setVideo] = useState();
    const [isLoading, setLoading] = useState(false);
    const email = props.email;

    //DB endpoint
    const details_endpoint = ''
    useEffect(() => {
        setLoading(true)
        fetch(details_endpoint)
        .then((res) => res.json())
        .then((data) => {
            setDetails(data)
            setLoading(false)
        })
    }, [])

    const steps_endpoint = ''
    useEffect(() => {
        setLoading(true)
        fetch(steps_endpoint)
        .then((res) => res.json())
        .then((data) => {
            setSteps(data)
            setLoading(false)
        })
    }, [])

    const video_endpoint = ''
    useEffect(() => {
        setLoading(true)
        fetch(video_endpoint)
        .then((res) => res.json())
        .then((data) => {
            setVideo(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            <p className={styles.header}>Details</p>
            <div className={styles.content}>
                <p className={styles.details}>{details}</p>
            </div>
            <p className={styles.header}>Steps</p>
            <div className={styles.content}>
                <p className={styles.steps}>{steps}</p>
            </div>
            <p className={styles.header}>Video URL</p>
            <div className={styles.content}>
                <p className={styles.video}>{video}</p>
            </div>
        </>
    )
}