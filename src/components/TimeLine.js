import React, { useRef, useEffect, Fragment, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import styles from '../styles/TimeLine.module.css'
import timeLineJSON from '../assets/timeline.json'

export const TimeLine = ({ show, setShow }) => {
    const timeLine = useRef()
    const [timeLineArr, setTimeLineArr] = useState([])
    useEffect(() => {
        if (show) {
            timeLine.current.classList.add(styles.open)
            setTimeLineArr(timeLineJSON)
        } else {
            timeLine.current.classList.remove(styles.open)
        }
    }, [show, timeLineArr])

    const goBack = () => {
        setShow(false)
    }

    return (
        <Fragment>
            <div className={styles.container_time_line} ref={timeLine}>
                <IoIosArrowBack
                    fontSize={45}
                    style={{
                        marginTop: 20,
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                    onClick={goBack}
                />
                <div className={styles.content_time_line}>
                    <div className={styles.wrapper}>
                        <h2>My Time Line (Works and Studies)</h2>
                        <ul className={styles.sessions}>
                            {
                                timeLineArr.length > 0 ?
                                    timeLineArr.map(session => {
                                        return (
                                            <li key={session.date}>
                                                <div className={styles.time} >{session.date}</div>
                                                <p>
                                                    {session.event}
                                                </p>
                                            </li>
                                        )
                                    })
                                    : <></>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}