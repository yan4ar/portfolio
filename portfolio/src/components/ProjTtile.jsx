import { motion } from "framer-motion"
import styles from '../MainApp.module.scss'
import { useInView } from 'react-intersection-observer';
export function ProjTitle ({title,titleTwo,titleThree}){
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
    return(
        <>
   <motion.p className={styles.about__title}
             variants={listAnimation}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
              custom={2}
              ref={ref}
            >{title}</motion.p>
            <center><motion.p className={styles.projects__title}
             variants={listAnimation}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
              custom={2.5}
              ref={ref}
            >{titleTwo}</motion.p></center>
           
           <center><motion.p className={styles.projects__title}
              variants={listAnimation}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
              ref={ref}
            >{titleThree}</motion.p></center>
        </>
    )
}