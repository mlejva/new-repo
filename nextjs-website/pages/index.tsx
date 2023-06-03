import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js TypeScript Website</title>
        <meta name="description" content="A Next.js TypeScript website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Next.js TypeScript Website
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default Home;