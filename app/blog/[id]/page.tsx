import Head from 'next/head';
import Link from 'next/link';
import styles from '../blog.module.css';

export default function Blog() {
  return (
    <>
      <Head>
          <link rel="canonical" href="https://fridayblessings.me/" />
          <link rel="icon" href="/brat-generator.jpeg" type="image/jpeg" />
      </Head>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Homepage</a></li>
          <li className={styles.navItem}><a href="/blog">Blog</a></li>
          <li className={styles.navItem}><a href="https://ko-fi.com/harvey888">Buy me a coffee</a></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Brat Blogs</h1>
        <div className={styles.grid}>
          <article className={styles.card}>
          <Link href="/blog/1">
              <img src="/brat-generator.jpeg" alt="brat-generator" className={styles.blogImage} />
          </Link>
              <h2>brat-generator Quotes 1</h2>
              <p>brat-generator Quotes 1</p>
            
          </article>
          <article className={styles.card}>
          <Link href="/blog/2">
          <img src="/brat-generator.jpeg" alt="brat-generator Story 1" className={styles.blogImage} />
          </Link>
            <h2>brat-generator Story 1</h2>
            <p>brat-generator Story 1</p>
            
          </article>
          <article className={styles.card}>
          <Link href="/blog/3">
          <img src="/brat-generator.jpeg" alt="brat-generator Story 2" className={styles.blogImage} />
          </Link>
            <h2>brat-generator Story 2</h2>
            <p>brat-generator Story 2</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/4">
          <img src="/brat-generator.jpeg" alt="brat-generator Story 4" className={styles.blogImage} />
          </Link>
            <h2>brat-generator Story 4</h2>
            <p>brat-generator Story 4</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/5">
          <img src="/brat-generator.jpeg" alt="brat-generator Story 5" className={styles.blogImage} />
          </Link>
            <h2>brat-generator Story 5</h2>
            <p>brat-generator Story 5</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/6">
          <img src="/brat-generator.jpeg" alt="brat-generator Story 6" className={styles.blogImage} />
          </Link>
            <h2>brat-generator Story 6</h2>
            <p>brat-generator Story 6</p>
           
          </article>
        </div>
      </main>
    </>
  );
}