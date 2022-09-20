import styles from "../styles/WebDev.module.css"
import Head from 'next/head'
import Link from 'next/link';
import LinkedIn from '../public/Linkedin.svg'
import Github from '../public/Github.svg'
import Arrow from '../public/BackArrow.svg'
import Mail from '../public/Mail.svg'
import Image from "next/image";
import PjOne from '../public/touchspeed.png'
import PjTwo from '../public/juniorlevelsoftwarejobs.png'
import PjThree from '../public/the-recipe-guide.png'



function WebDev() {
  return (
    <div>
      <Head>
        <title>Software Developer | Octavius Bowman</title>
        <meta name="Web Dev" content="Web Development Projects" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.mainBody}>
        <section className={styles.aboutMe}>
          <title className={styles.title}>
            {`< WEB DEVELOPMENT />`}
          </title>
          <p className={styles.textBody}>
            I am always working on something. <br /> <br />
            As of late I do a lot of full-stack web development with tools like <br /> React, Webpack, and TailWindCSS,  Typescript, trpc, and nextAuth;<br />
            with a focus on writing clean reusable code. <br /> <br />
            My preference for writing the backend is Node.js coupled with MongoDB or MySQL.
          </p>
          <a className={styles.resume} href="/OctaviusBowman-Resume.pdf" target="_blank" download>
            <div className={styles.resumeButton}>
              Resume
            </div>
          </a>
        </section>
        <section className={styles.projects}>
          <title className={styles.projectTitle}>PROJECTS</title>
          <div className={styles.projectOne}>
            <div className={styles.projectInfo}>
              <h1>Touch Speed (Desktop)</h1>
              <p>Designed to test how fast you type, this site starts a sixty second timer from the time you
                start typing and determines how many words you have typed in the allotted time.
                <br /> <br />
                (Back-end coming soon that tracks progress of each user and gives them the option to create
                a user profile and a chance to feature on the global leaderboard)</p>
              <div className={styles.buttonContainer}>
                <Link href="https://www.touchspeedtest.com/">
                  <a target="_blank">
                    <div className={styles.buttonDes}>See Live</div>
                  </a>
                </Link>
                <Link href="https://github.com/OctaviusBowman/touchspeed">
                  <a target="_blank">
                    <div className={styles.buttonDes}>Source Code</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.projectDemo}>
              <div className={styles.projectDemoWrapper}>
                <Image src={PjOne} alt='Touchspeed website screenshot' />
              </div>
            </div>
          </div>

          <div className={styles.projectTwo}>
            <div className={styles.projectInfo}>
              <h1>
                Junior Software Job Board
                <br />
                🚧(Under construction)🚧
              </h1>
              <p>Uses a cron service worker that updates every minute to fetch posted jobs on github
                (can be modified to scrape data from any site). Proceeds to filter the fetched results
                looking for keyword such as manager, sr. architect, etc to eliminate the job listing.
                Then serves the sorted data from the redis client to the website.
                Built utilizing: React, Express.js, Redis, Node.js, Cron</p>
              <div className={styles.buttonContainer}>
                <Link href="https://juniorlevelsoftwarejobs.com/">
                  <a target="_blank">
                    <div className={styles.buttonDes}>See Live</div>
                  </a>
                </Link>
                <Link href="https://github.com/OctaviusBowman/juniorlevelsoftwarejobs">
                  <a target="_blank">
                    <div className={styles.buttonDes}>Source Code</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.projectDemo}>
              <div className={styles.projectDemoWrapper}>
                <Image src={PjTwo} alt='Touchspeed website screenshot' />
              </div>
            </div>
          </div>

          <div className={styles.projectThree}>
            <div className={styles.projectInfo}>
              <h1>Recipe Guide (Desktop)</h1>
              <p>Finds at least one recipe guide for any food you type in the search bar</p>
              <div className={styles.buttonContainer}>
                <Link href="https://the-recipe-guide.netlify.app/" target="_blank">
                  <a target="_blank">
                    <div className={styles.buttonDes}>See Live</div>
                  </a>
                </Link>
                <Link href="https://github.com/OctaviusBowman/RecipeApp" target="_blank">
                  <a target="_blank">
                    <div className={styles.buttonDes}>Source Code</div>
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles.projectDemo}>
              <div className={styles.projectDemoWrapper}>
                <Image src={PjThree} alt='Touchspeed website screenshot' />
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <h1 className={styles.footerTitle}>Contact Me!</h1>
          <hr />
          <div className={styles.footerContainer}>
            <Link href="https://github.com/OctaviusBowman">
              <a target='_blank'>
                <Github className={styles.github} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/octavius-bowman-49436a161/">
              <a target="_blank">
                <LinkedIn className={styles.linkedin} />
              </a>
            </Link>
            <Link href="mailto:octaviusbowman@gmail.com">
              <a target="_blank">
                <Mail className={styles.mail} />
              </a>
            </Link>
          </div>
        </footer>
        <Link href="/">
          <Arrow className={styles.arrow} />
        </Link>
      </div>
    </div>
  )
}

export default WebDev