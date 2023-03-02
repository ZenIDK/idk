import styles from "../styles/task.module.css";

export default function TaskBoard() {
    return (
        <>
            <p className={styles.header}>Details</p>
            <div className={styles.content}>
                <p className={styles.details}>Sample Details are provided here</p>
            </div>
            <p className={styles.header}>Steps</p>
            <div className={styles.content}>
                <p className={styles.steps}>Listed here are the steps you need to complete</p>
            </div>
            <p className={styles.header}>Video URL</p>
            <div className={styles.content}>
                <p className={styles.video}>Please watch the video linked here</p>
            </div>
        </>
    )
}