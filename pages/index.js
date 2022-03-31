import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const states = [{ "name": "NSW", "orderCount": 32 }, { "name": "VIC", "orderCount": 4 }, { "name": "QLD", "orderCount": 12 },];
  const dateTime = "10/02/2022 12:34pm";

  const OrdersPerState = () => (
    <div className={styles.column}>
      <div className={styles.row}>
        <p>Orders per state</p>
        <p>{dateTime}</p>
      </div>
      <div className={styles.grid}>
        {states.map((state) => (
          <div className={styles.card} key={state.name}>
            <h2>{state.name}</h2>
            <p>{state.orderCount}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const RevenuePerDay = () => (
    <div className={styles.column}>
      <div className={styles.row}>
        <p>Revenue per day</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.graph}>
          <h2>my lines</h2>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Panel Charts</title>
        <meta name="description" content="Panel of sales data inc. charts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.link}>Panel Charts</span>
        </h1>
        <OrdersPerState />
        <RevenuePerDay />
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </div>
  )
}
