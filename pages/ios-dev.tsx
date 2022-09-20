import styles from "../styles/IosDev.module.css"
import Link from "next/link"
import Head from 'next/head'
import Arrow from '../public/BackArrow.svg'


function iosDev() {

  return (
    <div>
      <Head>
        <title>Software Developer | Octavius Bowman</title>
        <meta name="iOS Dev" content="iOS Apps" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.mainBody}>
        <div className={styles.gridContainer}>
          <p>Coming Soon...</p>
          <Link href="/">
          <Arrow className={styles.arrow} />
        </Link>
        </div>
      </div>
    </div>
  )
}

export default iosDev