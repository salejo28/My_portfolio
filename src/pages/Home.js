import React, { useRef, useEffect, useState, Fragment } from 'react'

import styles from '../styles/Home.module.css'
import img from '../assets/img_1.jpg'
import { MySkills } from '../components/MySkills'
import { TimeLine } from '../components/TimeLine'

export const Home = () => {

    const text = useRef()
    
    const [showSkills, setShowSkills] = useState(false)
    const [showTimeLine, setShowTimeLine] = useState(false)
    const [mounted, setMounted] = useState(true)
    const words = ["Backend developer", "Frontend developer"]
    let i = 0
    let timer

    useEffect(() => {
        if (mounted) {
            typingEffect()
        }
        
        return () => {
            setMounted(false)
            clearInterval(timer)
        }
    }, [mounted])

    function typingEffect() {
        let word = words[i].split("")
        var loopTyping = function () {
            if (word.length > 0) {
                text.current.innerHTML += word.shift()
            } else {
                deletingEffect()
                return false
            }
            timer = setTimeout(loopTyping, 400)
        }
        loopTyping()
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function () {
            if (word.length > 0) {
                word.pop()
                text.current.innerHTML = word.join("")
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                typingEffect()
                return false
            }
            timer = setTimeout(loopDeleting, 200)
        }
        loopDeleting()
    }

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.container_img}>
                        <img src={img} alt="my_img_for_home" className={styles.img} />
                    </div>
                    <div>
                        <div className={styles.my_name}>
                            <h4>Santiago Alejandro Ruiz Rojas</h4>
                        </div>
                        <div className={styles.container_text}>
                            <p className={styles.text} ref={text}></p>
                            <p className={styles.cursor}></p>
                        </div>
                        <div className={styles.container_buttons}>
                            <button className={styles.btn} onClick={() => setShowSkills(true)}>
                                My skills
                            </button>
                            <button className={styles.btn} onClick={() => setShowTimeLine(true)}>
                                Time line
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <MySkills show={showSkills} setShow={setShowSkills} />
            <TimeLine show={showTimeLine} setShow={setShowTimeLine} />
        </Fragment>
    )
}