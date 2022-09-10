import styles from "../styles/iosDev.module.css"
import Head from 'next/head'

function iosDev() {

  return (
    <div>
      <Head>
        <title>Software Developer | Octavius Bowman</title>
        <meta name="iOS Dev" content="iOS Apps" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.mainBody}>iosDev</div>
    </div>
  )
}

export default iosDev