import React from 'react'
import styles from './Experience.module.css';

import html from '../../assets/skills/s/html.png';
import css from '../../assets/skills/s/css.png';
import react from '../../assets/skills/s/react.png';
import sql from '../../assets/skills/s/sql.png';
import net from '../../assets/skills/s/asp.png';
import api from '../../assets/skills/s/api.png';
import google from '../../assets/history/google.png';
import cts from '../../assets/skills/cts.png';

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={html} alt='html' />
                        </div>
                        <p>HTML</p>

                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={css} alt='css' />
                        </div>
                        <p>CSS</p>

                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={net} alt='.net' />
                        </div>
                        <p>.Net</p>

                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={react} alt='react' />
                        </div>
                        <p>React</p>

                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={sql} alt='sql' />
                        </div>
                        <p>Sql Server</p>

                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={api} alt='REST API' />
                        </div>
                        <p>REST API</p>

                    </div>

                </div>
                <ul className={styles.history}>
                    <li className={styles.historyItem}><img src={cts} alt='Cognizant' />
                        <div className={styles.historyItemDetails}>
                            <h3> Jr. Software Engineer, Cognizant</h3>
                            <p>Aug, 2024</p>
                            <ul className={styles.text}>
                                <li >Partnered with a client to revamp a customer facing webpage.</li>
                                <li>Led a cross-functional team during a critical server migration project.</li>
                            </ul>
                        </div>
                    </li>

                    <li className={styles.historyItem}><img src={cts} alt='Cognizant' />
                        <div className={styles.historyItemDetails}>
                            <h3> Software Engineer Trainee, Cognizant</h3>
                            <p>Nov, 2022 - Nov, 2023</p>
                            <ul className={styles.text}>
                                <li>Refresh existing documents by replacing outdated links with relevant URLs.</li>
                                <li>Acquired knowledge of various healthcare regulations and guidelines</li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    )
}
