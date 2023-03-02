import Navbar from "@/components/navbar";
import styles from "../../styles/glossary.module.css";

export default function Glossary() {
    const mockData = {"ZDI": "Zendesk Development Interface", "Zopim": "The company Zendesk acquired and rebranded to Zendesk Chat", "a":"A", "b":"B"}

    return (
        <>
            <Navbar/>
            <div className={styles.glossary}>
                <p className={styles.title}>Looking for Terminologies?</p>
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
            </div>
        </>
    )
}