"use client";
import styles from "./contact.module.css";
import Link from 'next/link';

export default function Contact() {


  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/thehaniyaakhtar/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/thehaniyaakhtar", "_blank");
  };

  const handleEmailClick = () => {
    window.open("https://forms.gle/8AkbnL3sqM4Wsdee6", "_blank");
  };

  return (
    <div className={styles.contactContainer}>
      <section className={styles.contactSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/academics" className={styles.navLink}>Academics</Link>
          <Link href="/skills-certifications" className={styles.navLink}>Skills and Certifications</Link>
          <Link href="/contact" className={styles.navLink + ' ' + styles.active}>Get in Touch</Link>
        </nav>
        
        {/* Social media buttons at bottom */}
        <div className={`${styles.buttonContainer} button-container`}>
        <button className={styles.socialButton} onClick={handleEmailClick}>
        Reach Out
        </button>
          <button className={styles.socialButton} onClick={handleLinkedInClick}>
            LinkedIn
          </button>
          <button className={styles.socialButton} onClick={handleGitHubClick}>
            GitHub
          </button>
        </div>
      </section>
    </div>
  );
} 