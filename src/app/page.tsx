"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.scrollContainer}>
      {/* Hero Section: background image only */}
      <section className={styles.heroSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink + ' ' + styles.active}>Home</a>
          <a href="/academics" className={styles.navLink}>Academics</a>
          <a href="/skills-certifications" className={styles.navLink}>Skills and Certifications</a>
          <a href="/contact" className={styles.navLink}>Get in Touch</a>
        </nav>
        
        {/* Download buttons at bottom */}
        <div className={styles.buttonContainer}>
          <a
            className={styles.downloadButton}
            href="/Haniya%20Akhtar.pdf"
            download
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
