import React from 'react';
import styles from './skills-certifications.module.css';

const certifications = [
  {
    name: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google',
    year: 2024,
    certificateFile: 'Google Advanced Data Analytics Professional Certificate.pdf',
    bullets: [
      'Foundations of Data Science',
      'Get Started with Python',
      'Go Beyond the Numbers: Translate Data into Insights',
      'The Power of Statistics',
      'Regression Analysis: Simplify Complex Data Relationships',
      'The Nuts and Bolts of Machine Learning',
      'Google Advanced Data Analytics Capstone',
      'Accelerate Your Job Search with AI',
    ],
    projects: [
      {
        name: 'Employee-Attrition-Risk-Model-for-Strategic-Workforce-Retention',
        githubUrl: 'https://github.com/thehaniyaakhtar/Employee-Attrition-Risk-Model-for-Strategic-Workforce-Retention',
      },
      {
        name: 'Classifying-Claims-in-TikTok-Video',
        githubUrl: 'https://github.com/thehaniyaakhtar/Classifying-Claims-in-TikTok-Videos',
      },
    ],
    status: null,
  },
  {
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    year: 2024,
    certificateFile: 'IBM Data Science Professional Certificate.pdf',
    status: 'Ongoing',
  },
  {
    name: 'CS50\'s Introduction to Databases with SQL',
    issuer: 'HarvardX',
    year: 2024,
    certificateFile: 'CS50s Introduction to Databases with SQL.pdf',
    projects: [
      {
        name: 'Meteorite Impact Data Cleanup',
        description: 'Cleaned and structured NASA\'s global meteorite landing data using SQL, emphasizing data quality and schema optimization.',
        githubUrl: 'https://github.com/thehaniyaakhtar/meteorite-impact-data-cleanup-using-sql',
      },
      {
        name: 'Crime Map Reporting System',
        description: 'Developed a city-level crime reporting database system using SQLite with normalized schemas and role-based access (citizens, officers, admins).',
        githubUrl: 'https://github.com/thehaniyaakhtar/crime-map-reporting-system',
      },
    ],
    status: 'Ongoing',
  },
  {
    name: 'Oracle DBMS Foundations',
    issuer: 'Oracle',
    year: 2023,
    certificateFile: 'Oracle DBMS Foundations.pdf',
  },
  {
    name: 'NVIDIA Generative AI with Diffusion Models',
    issuer: 'NVIDIA',
    year: 2024,
    certificateFile: 'NVIDIA Generative AI with Diffusion Models.pdf',
  },
  {
    name: 'NVIDIA Building RAG Agents with LLMs',
    issuer: 'NVIDIA',
    year: 2024,
    certificateFile: 'NVIDIA Building RAG Agents with LLMs.pdf',
    status: 'Ongoing',
  },
  {
    name: 'DeepLearning.AI Supervised ML Regression and Classification',
    issuer: 'DeepLearning.AI',
    year: 2024,
    certificateFile: 'DeepLearning.AI Supervised ML Regression and Classification.pdf',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    year: 2023,
    certificateFile: 'AWS Academy Cloud Foundations.pdf',
  },
  {
    name: 'AWS Academy Cloud Architecture',
    issuer: 'AWS Academy',
    year: 2023,
    certificateFile: 'AWS Academy Cloud Architecture.pdf',
  },
  {
    name: 'Celonis Academic Process Mining Fundamentals',
    issuer: 'Celonis',
    year: 2023,
    certificateFile: 'Celonis Academic Process Mining Fundamentals.pdf',
  },
];

const projects = [
  {
    title: 'Spatiotemporal Analysis of Bike Rental Trends using Environmental Data',
    description: 'A regression-based system that forecasts bike rental demand using cleaned API-extracted weather and calendar data, reveals key temporal-environmental correlations, and is deployed as an interactive Shiny app via Posit.',
    skills: 'Python, R, Shiny, tidyverse, Leaflet, OpenWeather API, Posit Cloud',
    githubUrl: '#',
    status: null
  },
  {
    title: 'Deep Learning-Powered Multi-Asset Forecasting Engine',
    description: 'A real-time forecasting platform using LSTM models to predict equities, crypto, and mutual fund trends, integrating live market data in a Streamlit interface for actionable financial insights.',
    skills: 'TensorFlow, Keras, Streamlit, yfinance, NewsAPI, ta (technical analysis), Python',
    githubUrl: '#',
    status: null
  },
  {
    title: 'Adaptive Semantic Extraction System for Web-Scale Unstructured Data',
    description: 'A semantic web crawler to navigate complex domains and extract high-relevance textual content using LLMs, enabling advanced data discovery and contextual understanding.',
    skills: 'Python, Crawl4AI, FAISS, Pydantic, CSV, async scraping, LLM-based parsing',
    githubUrl: '#',
    status: null
  },
  {
    title: 'Multi-Asset Forecasting Platform using LSTM',
    description: 'A real-time forecasting platform using LSTM models to predict equities, crypto, and mutual fund trends, integrating live market data in a Streamlit interface for actionable financial insights.',
    skills: 'TensorFlow, Keras, Streamlit, yfinance, NewsAPI, ta (technical analysis), Python',
    githubUrl: '#',
    status: null
  },
  {
    title: 'Maintenance Monitoring Platform for Industrial Safety Automation',
    description: 'A real-time predictive maintenance platform leveraging sensor data and machine learning to detect faults and trigger proactive alerts across industrial systems.',
    skills: 'Flask, Python, SQLite, HTML5, CSS3, JavaScript, GitHub',
    githubUrl: '#',
    status: null
  },
  {
    title: 'CI/CD-Enabled ML System for Student Behavior Impact Analysis',
    description: 'ML pipeline integrating AWS, Azure, and GitHub Actions to automate retraining, ensure continuous integration and deployment (CI/CD), and scale academic performance prediction based on student behavioral data.',
    skills: 'Python, CatBoost, Pickle (.pkl), GitHub Actions, Azure, AWS',
    githubUrl: '#',
    status: 'Ongoing'
  },
  {
    title: 'Havenly – Your AI-Powered Health Insurance Advisor',
    description: 'Streamlit-powered platform integrating Google Gemini for personalized health insurance advisory that handles user queries and plan discovery via natural language interactions.',
    skills: 'Python, Streamlit, Git, Node.js (optional), React (optional)',
    githubUrl: '#',
    status: null
  },
  {
    title: 'Self-Optimizing Power Grid AI for Real-Time Energy Fraud Detection and Load Balancing',
    description: 'A real-time smart grid system leveraging Kafka streams and reinforcement learning to detect anomalies, predict demand, and dynamically optimise power distribution, preventing energy theft and blackouts.',
    skills: 'Python, Apache Kafka, GANs, Scikit-learn, Prophet, SHAP, Stable Baselines, Streamlit, Faker',
    githubUrl: '#',
    status: 'Ongoing'
  },
  {
    title: 'Customer Intelligence Analytics Pipeline',
    description: 'A robust analytics pipeline that transforms raw customer behavior data into actionable insights. Supports marketing and churn mitigation strategies for B2C platforms.',
    skills: 'Python, Pandas, SQL, Scikit-learn, Matplotlib, seaborn',
    githubUrl: '#',
    status: null
  }
];

export default function SkillsCertificationsPage() {
  return (
    <div className={styles.skillsCertContainer}>
      <section className={styles.skillsCertSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/academics" className={styles.navLink}>Academics</a>
          <a href="/skills-certifications" className={styles.navLink + ' ' + styles.active}>Skills and Certifications</a>
          <a href="/contact" className={styles.navLink}>Get in Touch</a>
        </nav>

        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Skills & Certifications</h1>

          <div className={styles.introSection}>
            <p className={styles.introText}>
            A concise summary of core competencies, technical capabilities, and recognized certifications, reflecting a strong foundation in advanced computing and data-driven technologies.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectItem}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.status && (
                    <span className={styles.projectStatus}>{project.status}</span>
                  )}
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.skillsSection}>
                    <span className={styles.toolsLabel}>Tools Used:</span>
                    <p className={styles.skillsList}>{project.skills}</p>
                  </div>
                  <div className={styles.projectButtons}>
                    <a 
                      className={styles.githubButton}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Certifications</h2>
            <div>
              {certifications.map((cert) => (
                <div key={cert.name} className={styles.certBox}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <strong>{cert.name}</strong>{' '}
                      {cert.status && (
                        <span className={styles.projectStatus}>{cert.status}</span>
                      )}
                    </div>
                    {cert.certificateFile && (
                      <a
                        href={`/certificates/${cert.certificateFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubButton}
                        style={{ fontSize: '0.95em', padding: '6px 14px', marginLeft: 12, flexShrink: 0 }}
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                  {cert.bullets && (
                    <div style={{ marginTop: 12, marginBottom: 12, marginLeft: 20 }}>
                      <span style={{ color: '#fcac16', fontWeight: 600, fontSize: '0.97em' }}>Certifications included:</span>
                      <ul style={{ marginTop: 8, marginBottom: 8 }}>
                        {cert.bullets.map((b, i) => (
                          <li key={i} style={{ color: '#a6a6a6', fontSize: '0.98em', marginBottom: 6, lineHeight: '1.4' }}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {cert.projects && (
                    <div style={{ marginTop: 12, marginBottom: 12, marginLeft: 20 }}>
                      <span style={{ color: '#fcac16', fontWeight: 600, fontSize: '0.97em' }}>Projects associated with the certification:</span>
                      <ul style={{ marginTop: 8, marginBottom: 8 }}>
                        {cert.projects.map((proj, j) => (
                          <li key={j} style={{ color: '#a6a6a6', fontSize: '0.97em', marginBottom: 12, lineHeight: '1.5' }}>
                            <div style={{ marginBottom: 6 }}>
                              <span style={{ fontWeight: 500 }}>{proj.name.replace(/-/g, ' ')}</span>
                              {('description' in proj) && proj.description && <span>: {proj.description}</span>}
                            </div>
                            <a
                              href={proj.githubUrl}
                              className={styles.githubButton}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ marginTop: 6, fontSize: '0.95em', padding: '6px 14px' }}
                            >
                              View GitHub
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 