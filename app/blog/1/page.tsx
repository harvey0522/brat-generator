import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styles from '../blog.module.css';

const markdown = `
![Flux First Impressions](https://sfile.chatglm.cn/testpath/9f9def54-08fd-5a4b-b32e-6eacc7a99ea1_0.png?image_process=format,webp)

# Latest News on Charli XCX

## 1. Charli XCX & H&M Collaboration
- **Overview**: Charli XCX has partnered with H&M for an exciting new collection that embodies her bold "Brat" aesthetic. This collaboration has sparked significant interest among fans and is highly anticipated.
- **Reactions**: While many fans are enthusiastic, some are concerned that this move might signal the commercialization of her brand&#8203;:contentReference[oaicite:0]{index=0}.

## 2. Partnership with SKIMS
- **Overview**: In addition to her work with H&M, Charli XCX has also teamed up with the shapewear brand SKIMS. She helped promote their "Brat Summer" collection, which aligns with her distinct style and growing influence in fashion&#8203;:contentReference[oaicite:1]{index=1}.

## Stay Updated
For more updates on Charli XCX's projects, be sure to follow her on social media or check out news sources regularly.

`;

export default function Blog1() {
  return (
    <>
      <Head>
        <title>Latest News on Charli XCX</title>
      </Head>
      <nav className={styles.navbar}> 
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Homepage</a></li>
          <li className={styles.navItem}><a href="/blog">Blog</a></li>
          <li className={styles.navItem}><a href="https://ko-fi.com/harvey888">Buy me a coffee</a></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <ReactMarkdown className={styles.markdown}>{markdown}</ReactMarkdown>
      </main>
    </>
  );
}