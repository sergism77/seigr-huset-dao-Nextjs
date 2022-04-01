import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seigr Huset DAO</title>
        <meta name="description" content="A DAO for bee lovers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <br/>
        Welcome to Seigr Huset DAO
        </h1>
        <p className={styles.description}>
        An ambitious common good DAO project.<br/>
        A vision merging both ecological beekeeping and blockchain development.
        </p>
        <h3>
          This is a work in progress dApp
        </h3>

        <div className={styles.grid}>
          <a href="https://seigr.notion.site/" className={styles.card}>
            <h2>Documentation</h2>
            <p>Find more information about Seigr Huset DAO on our Notion</p>
          </a>





        </div>
      </main>

    </div>
  )
}

export default Home
