import { Toggle } from './components/Toggle'
import styles from "./MainApp.module.scss"
import { Card } from './components/Card'
import React from 'react'
import { Statistic } from './components/Statistic'
import { motion } from 'framer-motion'
import { CardProj } from './components/CardProj'
import { About } from './components/About'
import { ProjTitle } from './components/ProjTtile'
import { Contact } from './components/Contact'
import { Element, Link } from 'react-scroll';



export function App() {



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
    visible: (custom) => ({
      opacity: 1,
      transition: {
        duration: 3,
        delay: custom * 0.5
      }
    })
  }



  React.useEffect(() => {
    const handleScroll = () => {
      const blockScroll = document.getElementById('block');
      if (blockScroll) {
        const { top } = blockScroll.getBoundingClientRect();
        const scrollPosition = Math.max(0, window.scrollY - top);
        blockScroll.style.cssText = `--scrollTop: ${scrollPosition}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  return (
    <>
      <Element name='main'>
        <header>
          <div className={styles.header__inv}></div>
          <div className={styles.container}>
            <div className={styles.header__flex}>
              <center> <Toggle /></center>
            </div>
          </div>
          <div className={styles.header__pos}>
            <Link activeClass="active" to="main" spy={true} smooth={true} duration={500}>
              <button className={styles.header__nav}>
                <img src="up.svg" alt="" />
              </button>
            </Link>
          </div>
         

        </header>
      </Element>
      <main>
        <div className={styles.container}>
          <div className={styles.intro__flex}>

            <motion.div className={styles.intro__blockOne}
              variants={headingAnimation}
              initial="hidden"
              animate="visible"
              custom={1.5}

            >
              <p className={styles.intro__blockText}>
                FRONTEND
                <br />
                <br />
                DEVELOPER
              </p>
            </motion.div>


            <motion.div className={styles.intro__blockTwo}
              variants={headingAnimation}
              initial="hidden"
              animate="visible"
              custom={2}

            >
              <Card
                linkOne='#about'
                text='ABOUT ME'
                textTwo='+'
                section='about'

              />
              <Card
                linkOne='#project'
                text='PROJECTS'
                textTwo='+'
                section='project' />
              <Card
                linkOne='#stack'
                text='STACK'
                textTwo='+'
                section='stack' />
              <Card
                linkOne='#contact'
                text='CONTACT'
                section='contact'
                textTwo='+' />
            </motion.div>
          </div>

          <div className={styles.playlist__flex}>
            <motion.div
              className={styles.intro__playlist}
              variants={headingAnimation}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <button>
              </button>

            </motion.div>

          </div>
          <Element name='about'>
            <div id='about'>
              <About />
            </div>
          </Element>
          <div className={styles.project}>
            <Element name='project'>
              <div id='project'>
                <ProjTitle
                  title='PROJECTS'
                  titleTwo='SOLO'
                  titleThree=''
                />
              </div>
            </Element>
            <div className={styles.projects__card}>

              <CardProj
                title='VALORANT WIKI'
                text='The first project, with my design.
                
                I was just getting to
                know Java script back then. '


                textTwo='I was just getting to
                know Java script back then.'
                textThree='And only delved into the course of the case'
                link='https://github.com/yan4ar/VALORANT-WIKI'
                video='val.webm'

              />

              <CardProj
                title='HAPPY COACHING'
                text='I did this project to get acquainted with React framework technologies.'
                textTwo='Thanks to this project, I quickly got used to basic knowledge'
                link='https://github.com/yan4ar/happy'
                video="happy.webm"
              />

              <CardProj
                title='FORPOST'
                text='The last single project in which I used vite also wrote in ts,
                 and used many technologies like Redux,SASS,'

                textTwo='StyledComponents,'

                textThree='Json server and so on'

                link='https://github.com/yan4ar/ForPost'
                video="forpost.webm"

              />

            </div>
            <ProjTitle
              title=''
              titleTwo=''
              titleThree='TEAM'
            />

          </div>
          <div className={styles.projects__card}>

            <CardProj
              title='EUROCRAN'

              text='A joint project with a 
              team from college, '

              textTwo=' where everyone was in
              the role of team leader
              for one project.'


              textThree=' I got this project'

              link='https://github.com/flex4ever/rental_of_special_equipment'
              video='euro.webm'

            />

            <CardProj
              title='HELP DEVELOPMENT'
              text='A joint project to improve the quality'
              textTwo='of teamwork 
              and deadlines.'
              link='https://github.com/flex4ever/legalizationSelfConstruction'
              video="legal.webm"
            />

            <CardProj
              title='CRYPTER NFT'
              text='The latest team project 
              to improve '
              textTwo='the quality 
              of teamwork.'
              link='https://github.com/flex4ever/crypterNFT'
              video="nft.webm"
            />
          </div>

        </div>



        <div className={styles.scrollBlock} id='block'>
          <div className={styles.backGrad}></div>
          <div className={styles.up}>
            <div className={styles.layers}>
              <div className={styles.layer__header}>
                <motion.div className={styles.layers__caption}
                  variants={listAnimation}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >STACK</motion.div>
              </div>

              <div className={`${styles.layer} ${styles.layers__base}`} ></div>
              <div className={`${styles.layer} ${styles.layers__sun}`} ></div>
              <div className={`${styles.layer} ${styles.layers__middle}`} ></div>
              <div className={`${styles.layer} ${styles.layers__front}`}></div>
              <div className={styles.layer__down}></div>
            </div>
          </div>


          <article className={styles.main_article}>
            <Element name='stack'>
              <div id='stack'>
                <Statistic ></Statistic>
              </div>
            </Element>
          </article>
        </div>
      </main >
      <div className={styles.backGradTwo}></div>
      <footer>
        <Element name='contact'>
          <div id='contact'>
            <Contact


            />
          </div>
        </Element>
      </footer>


    </>

  )
}


