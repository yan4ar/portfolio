import styles from '../MainApp.module.scss'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

export function About() {

    const [ref, inView] = useInView({
        triggerOnce: true, 
        rootMargin: '260px 0px ', 
      });
    
    
      const headingAnimation = {
        hidden: {
          opacity: 0,
          x: 100
        },
        visible: (custom) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: custom * 0.5
          }
        })
      }
      const listAnimation = {
        hidden: {
          opacity: 0
        },
        visible:(custom) => ({
          opacity: 1,
          transition: {
            duration: 3,
            delay: custom * 0.5
          }
        })
      }
      const aboutAnimation = {
        hidden: {
          opacity: 0,
          x: -100
        },
        visible: (custom) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: custom * 0.5
          }
        })
      }




    return(
        <>
        <div className={styles.about}>
        <motion.p className={styles.about__title}
          variants={listAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          ref={ref}
        >ABOUT ME</motion.p>
        <div className={styles.about__flex}>
          <motion.h1 className={styles.about__intro}
            variants={aboutAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1.5}
            ref={ref}
          >HI</motion.h1>
          <motion.p className={styles.about__text_margin}
            variants={headingAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            ref={ref}
          >
            I am Yaroslav, a junior frontend developer with 3 years of experience. I am passionate about creating various interesting and complex projects.
          </motion.p>
        </div>
        <motion.p className={styles.about__text}
          variants={headingAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          ref={ref}
        >For me, quality and execution are the most important, along with learning new technologies to improve my progress. I especially enjoy working on atypical websites.
          <br />
          <br />
          I am easy to work with because I can work continuously on a project, which motivates me</motion.p>
        <motion.div className={styles.about_flexTwo}
          variants={headingAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={4}
          ref={ref}
        ><button className={styles.about__git}
        >
          <img className={styles.about__gitHub} src="github.svg" alt="github" />
        </button></motion.div>
      </div>
      </>
    )
}