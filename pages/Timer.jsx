import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const getTime = (endDateString) =>{
    const diff = dayjs.duration(dayjs(endDateString).diff(dayjs()))
    return diff.format(`${Math.floor(diff.asDays())}:HH:mm:ss`)
}

const Timer = () => {
    const [, tick] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
        tick(t => t + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <>
            <div className={styles.card}>
                <h3>Didaktický test ČJ</h3>
                <p>{ getTime(new Date(1621893600000)) }</p>
            </div>
            <div className={styles.card}>
                <h3>Didaktický test AJ</h3>
                <p>{ getTime(new Date(1621807200000)) }</p>
            </div>
            <div className={styles.card}>
                <h3>Praktické zkoušky</h3>
                <p>{ getTime(new Date(1620597600000)) }</p>
            </div>
            <div className={styles.card}>
                <h3>Ústní zkoušky</h3>
                <p>{ getTime(new Date(1622498400000)) }</p>
            </div>
        </>
    )
}

export default Timer
