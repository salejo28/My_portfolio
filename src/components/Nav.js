import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/Nav.module.css'
import img from '../assets/img_2.jpg'

export const Nav = () => {
    const bars = useRef()
    const nav = useRef()
    const [open, setOpen] = useState(false)

    const onClick = () => {
        setOpen(!open)
        if (open) {
            bars.current.classList.remove(styles.open)
            nav.current.classList.remove(styles.open)
        } else {
            bars.current.classList.add(styles.open)
            nav.current.classList.add(styles.open)
        }
    }

    return (
        <Fragment>
            <div className={styles.bars} ref={bars} onClick={onClick}>
                <div className={styles.bar}></div>
            </div>
            <nav className={styles.nav} ref={nav}>
                <div className={styles.img_content_nav}>
                    <img src={img} alt="my_photo_for_nav" className={styles.img} />
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <Link to="/" data-text="Home" onClick={onClick}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutme" data-text="About me" onClick={onClick}>
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" data-text="Portfolio" onClick={onClick}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactme" data-text="Contact me" onClick={onClick}>
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}