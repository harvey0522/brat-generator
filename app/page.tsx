"use client";

import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const outputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setOutputText(event.target.value);
  };

  const generateAndDownloadImage = () => {
    const element = outputRef.current;
    console.log(element)
    if (element) {
      console.log('666')
      html2canvas(element).then((canvas) => {
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'bratCover.jpg';
          link.click();
          URL.revokeObjectURL(url);
        }, 'image/png');
      }); 
      
    }
  };


  return (
    <div className={styles.container}>
      <h1>Brat Generator</h1>
      <textarea
        className={styles.textarea}
        placeholder="please input text..."
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
      <button className={styles.button} onClick={generateAndDownloadImage}>Download Image</button>
      <div className={styles.outputText}  ref={outputRef} >{outputText}</div>
    </div>
  );
}