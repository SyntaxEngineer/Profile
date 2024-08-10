import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
import me from '../../assets/hero/bg1.png';
import hero from '../../assets/hero/heroImage.png';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi! I'm Mohan Kumar</h1>
                <span className={styles.description}> I'm a
                    <TypeAnimation sequence={[" Software Developer", 2000, " Full Stack Developer", 2000]}
                        speed={50} wrapper='span' repeat={Infinity} style={{ color: '#8A2BE2' }} />
                    <p>with 2 years of experience using React & .Net Reach out to learn more!</p>
                </span>
                <div className={styles.btn}>
                    <a href='mailto:mohanprojectid@gmail.com' className={styles.contactBtn}>Contact me</a>
                    <a href='https://drive.google.com/file/d/1sWy-i8wmQt8KIBju3MRReb80_YSxMf-p/view?usp=sharing' target='_blank' rel="noopener noreferrer" className={styles.cvBtn}> My CV</a>
                </div>
            </div>
            <img src={me} alt='hero img' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section >
    )
}
