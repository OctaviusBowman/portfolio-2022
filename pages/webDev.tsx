import styles from "../styles/WebDev.module.css"
import Head from 'next/head'
import Link from 'next/link';
import LinkedIn from '../public/Linkedin.svg'
import Github from '../public/Github.svg'
import Arrow from '../public/BackArrow.svg'
import Mail from '../public/Mail.svg'



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
            I'm always working on something. <br /> <br />
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
            <div className={styles.projectInfo}></div>
            <div className={styles.projectDemo}></div>
          </div>

          <div className={styles.projectTwo}>
            <div className={styles.projectInfo}></div>
            <div className={styles.projectDemo}></div>
          </div>

          <div className={styles.projectThree}>
            <div className={styles.projectInfo}></div>
            <div className={styles.projectDemo}></div>
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