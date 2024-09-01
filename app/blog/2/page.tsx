import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styles from '../../../styles/blog.module.css';

const markdown = `
![](https://sfile.chatglm.cn/testpath/5512c3eb-bff1-55b4-a5d6-215b76fd1bba_0.png?image_process=format,webp)
# Charli XCX Music Discography

## Studio Albums

### 1. **True Romance** (2013)
- **Highlights**: Charli XCX's debut studio album, featuring a blend of synth-pop and darkwave. Key tracks include "Nuclear Seasons" and "You're the One."

### 2. **Sucker** (2014)
- **Highlights**: This album brought Charli XCX mainstream success with hits like "Boom Clap" and "Break the Rules." It showcases her punk-pop style.

### 3. **Charli** (2019)
- **Highlights**: A critically acclaimed album featuring collaborations with artists like Lizzo and Troye Sivan. Notable tracks include "1999" and "Blame It on Your Love."

### 4. **How I'm Feeling Now** (2020)
- **Highlights**: Created during the COVID-19 pandemic, this album reflects Charli's DIY approach, with tracks like "Forever" and "Claws" standing out.

## Mixtapes

### 1. **Number 1 Angel** (2017)
- **Highlights**: A mixtape that blends pop with experimental sounds. Includes fan-favorite tracks like "3AM (Pull Up)" and "Dreamer."

### 2. **Pop 2** (2017)
- **Highlights**: A groundbreaking mixtape featuring a diverse range of guest artists. Key tracks include "Out of My Head" and "Unlock It."

## Notable Singles

- **"Boom Clap"** (2014) - From the soundtrack of *The Fault in Our Stars*.
- **"Vroom Vroom"** (2016) - Marking a shift towards a more experimental, hyperpop sound.
- **"Boys"** (2017) - Known for its catchy hook and music video featuring various male celebrities.
- **"1999"** (2018) - A nostalgic anthem featuring Troye Sivan.

## Collaborations

- **"Fancy"** with Iggy Azalea (2014) - A global hit that became one of the best-selling singles of that year.
- **"I Love It"** with Icona Pop (2012) - Charli co-wrote and featured on this energetic track that became a worldwide success.

## Soundtrack Contributions

- **"Kingdom"** with Simon Le Bon (2015) - Featured on the *Hunger Games: Mockingjay, Part 1* soundtrack.
- **"Explode"** (2014) - Featured on the *The Angry Birds Movie* soundtrack.

---

For a complete discography and more information, visit Charli XCX’s [official website](https://www.charlixcxmusic.com) or her [Wikipedia page](https://en.wikipedia.org/wiki/Charli_XCX_discography).

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