
import styles from "./CardProj.module.scss";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const CardProj = ({ title, text, textTwo, textThree, link, video }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <motion.div
      className={styles.cardBlock}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <div className={styles.cardTextBlock}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardText}>{text}</p>
        <p className={styles.cardText}>{textTwo}</p>
        <p className={styles.cardText}>{textThree}</p>
       
          <a href={link}><img className={styles.cardGitIcon} src="githubPink.svg" alt="GitHub Icon" /></a>
      
      </div>
      <div className={styles.cardProjBlock} >
        <video className={styles.cardVideo} autoPlay loop muted>
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};




