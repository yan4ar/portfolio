import styles from './Statistic.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
export function Statistic() {

    const [ref, inView] = useInView({
        triggerOnce: true, 
        rootMargin: '220px 0px ', 
      });
    

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
    



    const [mousePositions, setMousePositions] = useState({ block1: { x: 0, y: 0 }, block2: { x: 0, y: 0 }, block3: { x: 0, y: 0 }, block4: { x: 0, y: 0 }, });

    function handleMouseMove({ clientX, clientY, currentTarget }, block) {
        const { left, top } = currentTarget.getBoundingClientRect();
        let xPosition = clientX - left;
        let yPosition = clientY - top;
    
        switch (block) {
            case 'block2':
                xPosition += 10;
                yPosition -= 200;
                break;
            case 'block3':
            
                xPosition -= 200; 
                yPosition += 10; 
                break;
            case 'block4':
             
                xPosition += 20; 
                yPosition -= 350; 
                break;
            default:
                break;
        }
    
        setMousePositions((prevState) => ({
            ...prevState,
            [block]: { x: xPosition, y: yPosition },
        }));
    }

    return (
        <div className={styles.stack}>
            <div className={styles.container}>

                <div className={styles.stack__main}>

                    <div className={styles.stack__flex}>
                        <div onMouseMove={(e) => handleMouseMove(e, 'block1')} className={styles.stack__style} >

                            <motion.div  className={styles.stack__backgr}
                              variants={listAnimation}
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                              custom={1}
                              ref={ref}
                            >

                            <div style={{
                                background: `radial-gradient(400px circle at ${mousePositions.block1.x}px ${mousePositions.block1.y}px, rgb(13,5,39,0.5), transparent 80%)`,
                                
                            }} className={styles.stack__block}>
                                <img className={styles.stack__iconA} src="react.svg" alt="" />
                                <img className={styles.stack__iconB} src="redux.svg" alt="" />
                                <img className={styles.stack__iconC} src="vite.svg" alt="" />
                                <img className={styles.stack__iconD} src="axios.svg" alt="" />
                            </div>

                            </motion.div>

                        </div>



                        <div onMouseMove={(e) => handleMouseMove(e, 'block2')}>

                        <motion.div  className={styles.stack__backgrTwo}
                          variants={listAnimation}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={1.5}
                          ref={ref}
                        >

                            <div style={{
                                background: `radial-gradient(300px circle at ${mousePositions.block2.x}px ${mousePositions.block2.y}px, rgb(13,5,39,0.5), transparent 80%)`
                            }} className={styles.stack__blockTwo}>
                                <img className={styles.stack__iconE} src="css.svg" alt="" />
                                <img className={styles.stack__iconG} src="styledcomponents.svg" alt="" />
                                <img className={styles.stack__iconF} src="scss.svg" alt="" />
                          
                            </div>
                        </motion.div>
                        </div>

                    </div>

                    <div className={styles.stack__flex}>
                        <div onMouseMove={(e) => handleMouseMove(e, 'block3')} >

                        <motion.div  className={styles.stack__backgrThree}
                          variants={listAnimation}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={2}
                          ref={ref}
                        >

                            <div style={{
                                background: `radial-gradient(200px circle at ${mousePositions.block3.x}px ${mousePositions.block3.y}px,rgb(13,5,39,0.5), transparent 80%)`
                            }} className={styles.stack__blockThree}>
                                <img className={styles.stack__iconH} src="html.svg" alt="" />
                                <img className={styles.stack__iconJ} src="git.svg" alt="" />
                                <img className={styles.stack__iconI} src="js.svg" alt="" />
                               
                                
                            </div>
                        </motion.div>
                        </div>
                        <div onMouseMove={(e) => handleMouseMove(e, 'block4')} >

                        <motion.div  className={styles.stack__backgrFour}
                          variants={listAnimation}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={2.5}
                          ref={ref}
                        >

                            <div style={{
                                background: `radial-gradient(100px circle at ${mousePositions.block4.x}px ${mousePositions.block4.y}px, rgb(13,5,39,0.5), transparent 80%)`
                            }} className={styles.stack__blockFour}>
                                <img className={styles.stack__iconK} src="pp.svg" alt="" />
                                <img className={styles.stack__iconL} src="figma.svg" alt="" />
                            </div>

                        </motion.div>
                    </div>
                    </div>
                </div>

            </div>
        </div>

    );
}