"use client";
import React, { useState, useEffect, useCallback } from 'react';
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
        name: 'ClaimEngage: Analyzing Claim-Driven Engagement in TikTok Content',
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
    name: "CS50's Introduction to Databases with SQL",
    issuer: 'HarvardX',
    year: 2024,
    certificateFile: 'CS50s Introduction to Databases with SQL.pdf',
    projects: [
      {
        name: 'Meteorite Impact Data Cleanup',
        description: "Cleaned and structured NASA's global meteorite landing data using SQL, emphasizing data quality and schema optimization.",
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
    certificateFile: 'ORACLE DBMS Exam.pdf',
  },
  {
    name: 'NVIDIA Generative AI with Diffusion Models',
    issuer: 'NVIDIA',
    year: 2024,
    certificateFile: 'AI.pdf',
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
    certificateFile: 'ML.pdf',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    year: 2023,
    certificateFile: 'AWS Foundations.pdf',
  },
  {
    name: 'AWS Academy Cloud Architecture',
    issuer: 'AWS Academy',
    year: 2023,
    certificateFile: 'AWS Architecture.pdf',
  },
  {
    name: 'Celonis Academic Process Mining Fundamentals',
    issuer: 'Celonis',
    year: 2023,
    certificateFile: 'DWM.pdf',
  },
];

const projects = [
  {
    title: 'Spatiotemporal Analysis of Bike Rental Trends using Environmental Data',
    description: 'A regression-based system that forecasts bike rental demand using cleaned API-extracted weather and calendar data, reveals key temporal-environmental correlations, and is deployed as an interactive Shiny app via Posit.',
    skills: 'Python, R, Shiny, tidyverse, Leaflet, OpenWeather API, Posit Cloud',
    githubUrl: 'https://github.com/thehaniyaakhtar/Spatiotemporal-Analysis-of-Bike-Rental-Trends-using-Environmental-Data',
    status: null
  },
  {
    title: 'Deep Learning-Powered Multi-Asset Forecasting Engine',
    description: 'A real-time forecasting platform using LSTM models to predict equities, crypto, and mutual fund trends, integrating live market data in a Streamlit interface for actionable financial insights.',
    skills: 'TensorFlow, Keras, Streamlit, yfinance, NewsAPI, ta (technical analysis), Python',
    githubUrl: 'https://github.com/thehaniyaakhtar/Deep-Learning-Powered-Multi-Asset-Forecasting-Engine',
    status: null
  },
  {
    title: 'Adaptive Semantic Extraction System for Web-Scale Unstructured Data',
    description: 'A semantic web crawler to navigate complex domains and extract high-relevance textual content using LLMs, enabling advanced data discovery and contextual understanding.',
    skills: 'Python, Crawl4AI, FAISS, Pydantic, CSV, async scraping, LLM-based parsing',
    githubUrl: null,
    status: 'Ongoing'
  },
  {
    title: 'LLM-Powered Book Discovery Engine with Contextual User Modeling',
    description: 'Conversational engine that personalizes book discovery by interpreting user sentiment and retrieving titles through semantic search, enhancing engagement for content platforms.',
    skills: 'FAISS, LangChain, HuggingFace Transformers, Gradio, Python, Pandas',
    githubUrl: 'https://github.com/thehaniyaakhtar/LLM-Powered-Book-Discovery-Engine-with-Contextual-User-Modeling',
    status: null
  },
  {
    title: 'Maintenance Monitoring Platform for Industrial Safety Automation',
    description: 'A real-time predictive maintenance platform leveraging sensor data and machine learning to detect faults and trigger proactive alerts across industrial systems.',
    skills: 'Flask, Python, SQLite, HTML5, CSS3, JavaScript, GitHub',
    githubUrl: 'https://github.com/thehaniyaakhtar/Maintenance-Monitoring-Platform-for-Industrial-Safety-Automation',
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
    githubUrl: 'https://github.com/thehaniyaakhtar/Havenly-Your-AI-Powered-Health-Insurance-Advisor',
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
    status: 'Ongoing'
  }
];

// Image configuration for each project
const projectImages: { [key: string]: string[] } = {
  'Spatiotemporal Analysis of Bike Rental Trends using Environmental Data': [
    'Choosing location for checking demands.png',
    'In-depth Analysis.png',
    'Parameters effecting Demads.png',
    'Results of Chosen City.png',
  ],
  'Deep Learning-Powered Multi-Asset Forecasting Engine': [
    'AI-Driven Stocks and Mutual Funds Chatbot for Instant Queries .jpg',
    'Company Ticker Data Retrieval via Chatbot Execution.jpg',
    'Cryptocurrency; Top Performers and Updates 1.jpg',
    'Cryptocurrency; Top Performers and Updates 2.jpg',
    'End-to-End LSTM Model Pipeline for Stock Forecasting.jpg',
    'Latest Stock Market News Aggregation Module.jpg',
    'Mutual Funds Analysis Portal for Performance Evaluation.jpg',
    'Real-Time Stock Prediction Execution using Stream-lit Library.jpg',
    'Technical Indicators for Stock Evaluation 1.jpg',
    'Technical Indicators for Stock Evaluation 2.jpg',
    'Web Application Dashboard for Stock Analysis.jpg',
  ],
  'LLM-Powered Book Discovery Engine with Contextual User Modeling': [
    'View of Web Application.png',
  ],
  'Maintenance Monitoring Platform for Industrial Safety Automation': [
    'Comparing Historic Records.png',
    'Dashboard.png',
    'Homepege.png',
    'Prediction.png',
    'Recording IoT data.png',
    'Results.png',
    'Scheduling a Repair.png',
    'Setting Alerts.png',
  ],
};

export default function SkillsCertificationsPage() {
  // Show orientation prompt on mobile portrait
  const [showOrientationPrompt, setShowOrientationPrompt] = useState(false);
  useEffect(() => {
    const checkOrientation = () => {
      if (window.innerWidth < 700 && window.innerHeight > window.innerWidth) {
        setShowOrientationPrompt(true);
      } else {
        setShowOrientationPrompt(false);
      }
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);
  // Modal state
  const [openModalProjectIndex, setOpenModalProjectIndex] = useState<number | null>(null);
  const [openModalImageIndex, setOpenModalImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (openModalProjectIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [openModalProjectIndex]);

  // Reset image state when modal opens
  useEffect(() => {
    if (openModalProjectIndex !== null) {
      setImageLoading(true);
      setImageError(false);
    }
  }, [openModalProjectIndex, openModalImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (openModalProjectIndex === null) return;
      
      switch (e.key) {
        case 'Escape':
          setOpenModalProjectIndex(null);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (openModalImageIndex > 0) {
            setOpenModalImageIndex(openModalImageIndex - 1);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          const currentProject = projects[openModalProjectIndex];
          const images = projectImages[currentProject.title] || [];
          if (openModalImageIndex < images.length - 1) {
            setOpenModalImageIndex(openModalImageIndex + 1);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openModalProjectIndex, openModalImageIndex]);

  // Preload images for current project
  const preloadImages = useCallback((projectTitle: string) => {
    const images = projectImages[projectTitle] || [];
    images.forEach((imageName: string) => {
      const img = new Image();
      img.src = `/projects/${projectTitle}/${imageName}`;
    });
  }, []);

  const handleOpenModal = (projectIndex: number) => {
    const project = projects[projectIndex];
    setOpenModalProjectIndex(projectIndex);
    setOpenModalImageIndex(0);
    preloadImages(project.title);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const handleCloseModal = () => {
    setOpenModalProjectIndex(null);
    setImageLoading(false);
    setImageError(false);
  };

  return (
    <div className={styles.skillsCertContainer}>
      {showOrientationPrompt && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.92)',
          color: '#fcac16',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          textAlign: 'center',
          padding: 32
        }}>
          <div style={{fontSize: 48, marginBottom: 24}}>↻</div>
          Please rotate your device to landscape for the best experience.
        </div>
      )}
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
              {projects.map((project, index) => {
                const images = projectImages[project.title] || [];
                const hasImages = images.length > 0;
                const isModalOpen = openModalProjectIndex === index;
                
                return (
                  <div key={index} className={styles.projectItem} style={{ position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', minHeight: 60 }}>
                      <h3 className={styles.projectTitle} style={{ marginTop: 0 }}>{project.title}</h3>
                    </div>
                    {/* Show 'Ongoing' directly below the title for Customer Intelligence Analytics Pipeline */}
                    {project.title === 'Customer Intelligence Analytics Pipeline' && project.status && (
                      <span className={styles.projectStatus}>{project.status}</span>
                    )}
                    <p className={styles.projectDescription}>{project.description}</p>
                    {/* For all other projects, show status after description as before */}
                    {project.title !== 'Customer Intelligence Analytics Pipeline' && project.status && (
                      <span className={styles.projectStatus}>{project.status}</span>
                    )}
                    <div className={styles.skillsSection}>
                      <span className={styles.toolsLabel}>Tools Used:</span>
                      <p className={styles.skillsList}>{project.skills}</p>
                    </div>
                    {/* Bottom right: GitHub and Project buttons (always visible) */}
                    <div className={styles.projectButtons} style={{ display: 'flex', gap: 8, alignItems: 'flex-end', marginTop: 16, position: 'absolute', right: 24, bottom: 24 }}>
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <>
                          <a 
                            className={styles.githubButton}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View GitHub
                          </a>
                          {project.title === 'Havenly – Your AI-Powered Health Insurance Advisor' ? (
                            <a
                              className={styles.githubButton}
                              href="https://drive.google.com/file/d/1nSWtoJ0wQz0HqiM0gIxDzoQD2mUmJUcH/view"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                          ) : (
                            hasImages ? (
                              <button
                                className={styles.githubButton}
                                onClick={() => handleOpenModal(index)}
                              >
                                View Project
                              </button>
                            ) : (
                              <button className={styles.githubButton} disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>View Project</button>
                            )
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Modal */}
          {openModalProjectIndex !== null && (
            <div className={styles.modalOverlay} onClick={handleCloseModal}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button
                  className={styles.modalCloseButton}
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  ×
                </button>
                
                {openModalImageIndex > 0 && (
                  <button
                    className={styles.modalNavButton}
                    style={{ left: 8 }}
                    onClick={() => setOpenModalImageIndex(openModalImageIndex - 1)}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                )}
                
                <div className={styles.modalImageContainer}>
                  {imageLoading && (
                    <div className={styles.imageLoading}>
                      <div className={styles.spinner}></div>
                      <p>Loading image...</p>
                    </div>
                  )}
                  
                  {imageError && (
                    <div className={styles.imageError}>
                      <p>Failed to load image</p>
                      <button 
                        className={styles.githubButton}
                        onClick={() => {
                          setImageError(false);
                          setImageLoading(true);
                        }}
                      >
                        Retry
                      </button>
                    </div>
                  )}
                  
                  {!imageError && (
                    <img
                      src={`/projects/${projects[openModalProjectIndex].title}/${projectImages[projects[openModalProjectIndex].title][openModalImageIndex]}`}
                      alt={projectImages[projects[openModalProjectIndex].title][openModalImageIndex]}
                      className={styles.modalImage}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      style={{ display: imageLoading ? 'none' : 'block' }}
                    />
                  )}
                </div>
                
                {openModalImageIndex < (projectImages[projects[openModalProjectIndex].title]?.length || 0) - 1 && (
                  <button
                    className={styles.modalNavButton}
                    style={{ right: 8 }}
                    onClick={() => setOpenModalImageIndex(openModalImageIndex + 1)}
                    aria-label="Next"
                  >
                    ›
                  </button>
                )}
                
                <div className={styles.modalImageTitle}>
                  {projectImages[projects[openModalProjectIndex].title][openModalImageIndex]?.replace(/\.[^/.]+$/, '')}
                </div>
                
                <div className={styles.modalImageCounter}>
                  {openModalImageIndex + 1} / {projectImages[projects[openModalProjectIndex].title]?.length}
                </div>
              </div>
            </div>
          )}

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Certifications</h2>
            <div>
              {certifications.map((cert) => (
                <div key={cert.name} className={styles.certBox}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <strong className={styles.sectionTitle + ' ' + styles.noUnderline}>{cert.name}</strong>{' '}
                      {cert.status && (
                        <span className={styles.projectStatus}>{cert.status}</span>
                      )}
                    </div>
                    {cert.certificateFile &&
                      cert.name !== 'IBM Data Science Professional Certificate' &&
                      cert.name !== "NVIDIA Building RAG Agents with LLMs" &&
                      cert.name !== "CS50's Introduction to Databases with SQL" && (
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
                            </div>
                            {('description' in proj) && typeof proj.description === 'string' && proj.description && (
                              <div style={{ marginBottom: 6, marginLeft: 10, fontSize: '0.96em', color: '#bdbdbd' }}>{String(proj.description)}</div>
                            )}
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                className={styles.githubButton}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginTop: 6, fontSize: '0.95em', padding: '6px 14px' }}
                              >
                                View GitHub
                              </a>
                            )}
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