import React, { useRef, useEffect, Fragment, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'

import styles from '../styles/MySkills.module.css'
import skillsJSON from '../assets/skills.json'

export const MySkills = ({ show, setShow }) => {

    const skills = useRef()
    const languages = useRef()
    const frameworks = useRef()
    const [skillsArray, setSkillsArray] = useState([])
    const [showLanguages, setShowLanguages] = useState(true)
    /* const [mounted, setMounted] = useState(true) */

    useEffect(() => {
        setSkillsArray(skillsJSON)
        if (show) {
            skills.current.classList.add(styles.open)
            if (showLanguages) {
                if (languages.current.classList.contains(styles.hide)) languages.current.classList.remove(styles.hide)
                if (frameworks.current.classList.contains(styles.show)) frameworks.current.classList.remove(styles.show)
            } else {
                languages.current.classList.add(styles.hide)
                frameworks.current.classList.add(styles.show)
            }
        } else {
            skills.current.classList.remove(styles.open)
        }
    }, [show, showLanguages, skillsArray])

    const goBack = () => {
        setShow(false)
        setShowLanguages(true)
    }

    const toggleShowSkills = () => setShowLanguages(!showLanguages)
    //console.log(skillsArray)
    return (
        <Fragment>
            <div className={styles.container_skills} ref={skills}>
                <IoIosArrowBack
                    fontSize={45}
                    style={{
                        marginTop: 20,
                        cursor: 'pointer',
                        position: 'absolute',
                        zIndex: 10
                    }}
                    onClick={goBack}
                />
                <div className={styles.flex_container}>
                    <div
                        className={`${styles.content_skills} ${styles.content_languages}`}
                        ref={languages}
                    >
                        <h3>Languages</h3>
                        <div className={styles.skills_bars}>
                            {
                                skillsArray.length > 0 ? skillsArray[1].languages.map(language => {                                    
                                    return (
                                        <div className={styles.bar} key={language.language}>
                                            <div className={styles.info}>
                                                <span>{language.language}</span>
                                            </div>
                                            <div className={styles.progress_line}>
                                                <span
                                                    style={{ width: language.percent + '%' }}
                                                    data-percent={language.percent + "%"}
                                                ></span>
                                            </div>
                                        </div>
                                    )
                                }) : <></>
                            }
                        </div>
                    </div>
                    <div
                        className={`${styles.content_skills} ${styles.content_frameworks}`}
                        ref={frameworks}
                    >
                        <h3>Frameworks</h3>
                        <div className={styles.content_frameworks_grid}>
                            <div className={`${styles.content_skill_bars} ${styles.back}`}>
                                <h3>Backend</h3>
                                <div className={styles.skills_bars}>
                                    {
                                        skillsArray.length > 0 ? 
                                            skillsArray[0].frameworks[0].backend.map(framework => {
                                                return (
                                                    <div className={styles.bar} key={framework.skill}>
                                                        <div className={styles.info}>
                                                            <span>{framework.skill}</span>
                                                        </div>
                                                        <div className={styles.progress_line}>
                                                            <span 
                                                                style={{ width: framework.percent+'%' }} 
                                                                data-percent={framework.percent+'%'}
                                                            ></span>
                                                        </div>
                                                    </div>
                                                )
                                            }) 
                                            : <></>
                                    }
                                </div>
                            </div>
                            <div className={`${styles.content_skill_bars} ${styles.front}`}>
                                <h3>Frontend</h3>
                                <div className={styles.skills_bars}>
                                    {
                                        skillsArray.length > 0 ? 
                                        skillsArray[0].frameworks[1].frontend.map(framework => {
                                            return (
                                                <div className={styles.bar} key={framework.skill}>
                                                    <div className={styles.info}>
                                                        <span>{framework.skill}</span>
                                                    </div>
                                                    <div className={styles.progress_line}>
                                                        <span 
                                                            style={{ width: framework.percent+'%' }} 
                                                            data-percent={framework.percent+'%'}
                                                        ></span>
                                                    </div>
                                                </div>
                                            )
                                        }) 
                                        : <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.btn_toggle} onClick={toggleShowSkills}>
                    <span>{showLanguages ? 'Frameworks' : 'Languages'}</span>
                    <IoIosArrowDown
                        fontSize={30}
                        style={{
                            transform: !showLanguages ? 'rotate(-180deg)' : 'rotate(0deg)',
                            transition: 'all .5s ease'
                        }}
                    />
                </button>
            </div>
        </Fragment>
    )
}