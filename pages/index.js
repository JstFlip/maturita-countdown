import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Timer from './Timer'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maturita 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Maturita <span>2021</span>
        </h1>

        <p className={styles.description}>
          Čas zbývající do maturit IT4
        </p>

        <div className={styles.grid}>
          <Timer />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made by <a href="https://github.com/JstFlip">Flip</a></p>
      </footer>
    </div>
  )
}

export default Home
