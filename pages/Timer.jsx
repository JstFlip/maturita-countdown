import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const getTime = (endDateString) =>{
    const diff = dayjs.duration(dayjs(endDateString).diff(dayjs()))
    return diff.format(`HH:mm:ss`)
}

const getDays = (endDateString) =>{
    const diff = dayjs.duration(dayjs(endDateString).diff(dayjs()))
    return diff.format(`${Math.floor(diff.asDays())}`)
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
                <h3>Praktické zkoušky</h3>
                <h2>{ getDays(new Date('2021-05-10')) } <span>days</span></h2>
                <p>{ getTime(new Date('2021-05-10')) }</p>
            </div>
            <div className={styles.card}>
                <h3>Ústní zkoušky</h3>
                <h2>{ getDays(new Date('2021-06-01')) } <span>days</span></h2>
                <p>{ getTime(new Date('2021-06-01')) }</p>
            </div>
            <div className={styles.card}>
                <h3>Didaktický test AJ</h3>
                <h2>{ getDays(new Date('2021-05-24')) } <span>days</span></h2>
                <p>{ getTime(new Date('2021-05-24')) }</p>
            </div>
            <div className={styles.card}>
                <h3>Didaktický test ČJ</h3>
                <h2>{ getDays(new Date('2021-05-25')) } <span>days</span></h2>
                <p>{ getTime(new Date('2021-05-25')) }</p>
            </div>
        </>
    )
}

export default Timer
