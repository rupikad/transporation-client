import React from 'react';
import styles from './Header.css';
import { FaHome } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href='https://healthsparq-hackathon.netlify.com/'><FaHome/></a>
      <h1 className={styles.h1}>Transportation</h1>
    </header>
  );
}
