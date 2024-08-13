import styles from '../MainApp.module.scss'
import { motion } from "framer-motion"

import { Card } from './Card'
import { useInView } from 'react-intersection-observer';
export function Contact() {
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

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '220px 0px ',
    });

    const listAnimation = {
        hidden: {
            opacity: 0
        },
        visible: (custom) => ({
            opacity: 1,
            transition: {
                duration: 3,
                delay: custom * 0.5
            }
        })
    }



    return (
        <div className={styles.container}>
            <motion.p className={styles.footer__title}
                variants={headingAnimation}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1}
                ref={ref}
            >CONTACT</motion.p>
            <div className={styles.footer__flex}>
                <motion.div className={styles.footerBack}
                    variants={headingAnimation}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={1}
                    ref={ref}>
                    <Card
                        text='TELEGRAM'
                        link='https://t.me/iihjhhg'
                        img='tel.svg'/>
                    <Card
                        text='GITHUB'
                        link='https://github.com/yan4ar'
                        img='githublack.svg' />
                    <Card
                        text='E-MAIL'
                        link='mailto:yanchevskyyaroslav@yandex.ru'
                        img='e-mail.svg' />
                </motion.div>

                <motion.div className={styles.footer__blockOne}
                    variants={listAnimation}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={2}
                    ref={ref}

                >
                    <motion.p className={styles.intro__blockText}
                        variants={listAnimation}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={2}
                        ref={ref}
                    >
                        THX
                        <br />

                        FOR
                        <br />

                        WATCHING
                    </motion.p>
                </motion.div>

            </div>
        </div>
    )
}