import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href='tweets'>TWEETS PAGE</Link>
        </h1>
      </main>
    </div>
  );
}

export default Home;
