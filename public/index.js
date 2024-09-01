import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Brat Generator</h1>
      <textarea className={styles.textarea} placeholder="输入文本..."></textarea>
      <button className={styles.button} onClick={generateText}>生成</button>
      <div className={styles.outputText} id="outputText"></div>
    </div>
  );

  function generateText() {
    const inputText = document.querySelector('textarea').value;
    const outputText = document.getElementById('outputText');
    outputText.textContent = "生成的文本: " + inputText;
  }
}