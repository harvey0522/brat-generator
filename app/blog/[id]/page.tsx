import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/blog.module.css';

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
              <img src="https://sfile.chatglm.cn/testpath/9f9def54-08fd-5a4b-b32e-6eacc7a99ea1_0.png?image_process=format,webp" alt="brat-generator" className={styles.blogImage} />
          </Link>
              <h2>Latest News on Charli XCX</h2>
              <p>Latest News on Charli XCX</p>
            
          </article>
          <article className={styles.card}>
          <Link href="/blog/2">
          <img src="https://sfile.chatglm.cn/testpath/5512c3eb-bff1-55b4-a5d6-215b76fd1bba_0.png?image_process=format,webp" alt="brat-generator Story 1" className={styles.blogImage} />
          </Link>
            <h2>Charli XCX Music Discography
            </h2>
            <p>Charli XCX Music Discography
            </p>X
            
          </article>
          <article className={styles.card}>
          <Link href="/blog/3">
          <img src="https://sfile.chatglm.cn/testpath/4955834a-4263-5fa6-8ec6-92e1611a2b6b_0.png?image_process=format,webp" alt="brat-generator Story 2" className={styles.blogImage} />
          </Link>
            <h2>brat-generator Story 2</h2>
            <p>brat-generator Story 2</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/4">
          <img src="https://sfile.chatglm.cn/testpath/63d50335-ff9c-5f64-9d42-a0a2f22db5c3_0.png?image_process=format,webp" alt="brat-generator Story 4" className={styles.blogImage} />
          </Link>
            <h2>brat-generator Story 4</h2>
            <p>brat-generator Story 4</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/5">
          <img src="https://sfile.chatglm.cn/testpath/583c9dcd-d97b-59bb-b425-8b14c085c5e3_0.png?image_process=format,webp" alt="brat-generator Story 5" className={styles.blogImage} />
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