import type { NextPage } from 'next'
import { motion } from "framer-motion"
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Browser from '../public/Browser.svg'
import Phone from '../public/Phone.svg'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Software Engineer | Octavius Bowman</title>
        <meta name="description" content="Software Engineer with experience in React, Webpack, and TailWindCSS, Typescript, trpc, nextAuth, JavaScript, Ios, and Swift" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.heroBody}>
        <section className={styles.topBg}>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .2
              }
            }
          }} whileHover={{
            scale: 1.015,
            transition: {
              duration: .1
            }
          }}>
            <Link href="/web-dev">
              <Browser className={styles.browserLogo} />
            </Link>
          </motion.div>
          <Link href="/web-dev">
            <motion.div className={styles.webTitle}>{`<Web Dev/>`}</motion.div>
          </Link>
        </section>

        <section className={styles.bottomBg}>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .3
              }
            }
          }} whileHover={{
            scale: 1.015,
            transition: {
              duration: .1
            }
          }}>
            <Link href="/ios-dev">
              <Phone className={styles.phoneLogo} />
            </Link>
          </motion.div>
          <Link href="/ios-dev">
            <div className={styles.appleLogo}>{`iOS`}</div>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Home
