"use client";
import styles from "./contact.module.css";

export default function Contact() {
  const handleGmailClick = () => {
    window.location.href = "mailto:thehaniyaakhtar@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/thehaniyaakhtar/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/thehaniyaakhtar", "_blank");
  };

  return (
    <div className={styles.contactContainer}>
      <section className={styles.contactSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/academics" className={styles.navLink}>Academics</a>
          <a href="/skills-certifications" className={styles.navLink}>Skills and Certifications</a>
          <a href="/contact" className={styles.navLink + ' ' + styles.active}>Get in Touch</a>
        </nav>
        
        {/* Social media buttons at bottom */}
        <div className={styles.buttonContainer}>
          <a
            className={styles.socialButton}
            href="https://forms.gle/xEWJNTfeFZaW5fGt7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reach Out
          </a>
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