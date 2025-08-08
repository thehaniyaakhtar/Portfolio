"use client";
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.scrollContainer}>
      {/* Hero Section: background image only */}
      <section className={styles.heroSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink + ' ' + styles.active}>Home</Link>
          <Link href="/academics" className={styles.navLink}>Academics</Link>
          <Link href="/skills-certifications" className={styles.navLink}>Skills and Certifications</Link>
          <Link href="/contact" className={styles.navLink}>Get in Touch</Link>
        </nav>
        
        {/* Download buttons at bottom */}
        <div className={styles.buttonContainer}>
          <a
            className={styles.downloadButton}
            href="/Haniya%20Akhtar.pdf"
            download="Haniya Akhtar Resume.pdf"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            className={styles.downloadButton}
            href="https://github.com/thehaniyaakhtar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Github
          </a>
        </div>
      </section>
    </div>
  );
}
