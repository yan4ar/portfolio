import styles from "./Card.module.scss"
import { motion } from 'framer-motion'

import { Link  } from 'react-scroll';
export function Card(props) {

  const handleNavigationClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
};


    const listAnimation = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 2
          }
        }
      }

      return (
        <motion.div 
            className={styles.intro__flexTwo}
            variants={listAnimation}
            initial="hidden"
            animate="visible"
            custom={1}
        >
            <div className={styles.intro__flexCard}>
                <div className={styles.intro__card}>
                <Link activeClass="active" to={props.section} spy={true} smooth={true} duration={500}>
                    <a onClick={() => handleNavigationClick(props.linkOne)} className={styles.intro__cardText} href={props.linkOne}>{props.text}</a>
                  </Link>
                </div>
                <div className={styles.intro__cardBlock}>
                <Link activeClass="active" to={props.section} spy={true} smooth={true} duration={500}>
                    <a onClick={() => handleNavigationClick(props.linkOne)} className={styles.intro__cardBlockText} href={props.linkOne}>{props.textTwo}</a>
                    </Link>
                    <a href={props.link}><img src={props.img} className={styles.card__icon} alt="" /></a>
                </div>
            </div>
        </motion.div>
    );
}


