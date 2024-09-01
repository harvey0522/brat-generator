"use client";

import { useState, useRef, ChangeEvent} from 'react';
import html2canvas from 'html2canvas';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const outputRef = useRef(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    setOutputText(event.target.value);
  };

  const generateAndDownloadImage = () => {
    const element = outputRef.current;
    console.log(element)
    if (element) {
      html2canvas(element).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'bratCover.png';
          link.click();
          URL.revokeObjectURL(url);
          }
        }, 'image/png');
      }); 
      
    }
  };


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
      <div className={styles.container}>
        <h1 className={styles.title}>Brat Generator Image</h1>
        <textarea
          className={styles.textarea}
          placeholder="please input text..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <button className={styles.button} onClick={generateAndDownloadImage}>Download Brat Image</button> 
        <div className={styles.outputText}  ref={outputRef} >{outputText}</div>
      </div>
      
      
      <footer className={styles.footer}>
        <p>© 2024 Brat Generator. All rights reserved.</p>
        <p>Contact us at: <a href="mailto:harveybj2000@gmail.com">harveybj2000@gmail.com</a></p>
      </footer>
    </>
  );
}