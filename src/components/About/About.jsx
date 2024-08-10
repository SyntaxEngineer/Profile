import React from 'react'
import styles from './About.module.css';
import about from '../../assets/about/abt.png';
import ui from '../../assets/about/uiIcon.png';
import server from '../../assets/about/serverIcon.png';
import point from '../../assets/about/cursorIcon.png';
import a1 from "../../assets/about/images.jfif";

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={about} alt='me with a laptop' className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={ui} alt='UI' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>As a front-end developer, I specialize in creating responsive websites using React.js, HTML, and CSS, leveraging various libraries</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={server} alt='server' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>As a backend developer, I have hands-on experience maintaining and performing daily CRUD operations. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={point} alt='server' />
                        <div className={styles.aboutItemText}>
                            <h3>Passionate about AI & ML</h3>
                            <p>"I possess expertise in artificial intelligence and have successfully completed relevant certifications</p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}