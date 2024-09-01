"use client";

import { useState, ChangeEvent } from 'react';
import Head from 'next/head';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="canonical" href="https://www.fridayblessings.me/contact" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Homepage</a></li>
          <li className={styles.navItem}><a href="/blog">Blog</a></li>
          <li className={styles.navItem}><a href="https://ko-fi.com/harvey888">Buy me a coffee</a></li>
          <li className={styles.navItem}><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </>
  );
}