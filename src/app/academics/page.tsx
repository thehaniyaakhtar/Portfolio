"use client";
import React, { useState, useEffect, useCallback } from 'react';
import styles from "./academics.module.css";

// Image configuration for mini projects
const miniProjectImages: Record<string, string[]> = {
  'Maintenance Monitoring Platform for Industrial Safety Automation': [
    '1Homepege.png',
    '2Dashboard.png',
    '3Prediction.png',
    '4Recording IoT data.png',
    '5Comparing Historic Records.png',
    '6Results.png',
    '7Scheduling a Repair.png',
    'Setting Alerts.png',
  ],
  'Deep Learning-Powered Multi-Asset Forecasting Engine': [
    '1Web Application Dashboard for Stock Analysis.jpg',
    '2Real-Time Stock Prediction Execution using Stream-lit Library.jpg',
    '3Technical Indicators for Stock Evaluation 1.jpg',
    '4Technical Indicators for Stock Evaluation 2.jpg',
    '5Cryptocurrency; Top Performers and Updates 1.jpg',
    '6Cryptocurrency; Top Performers and Updates 2.jpg',
    '7Latest Stock Market News Aggregation Module.jpg',
    '8Mutual Funds Analysis Portal for Performance Evaluation.jpg',
    'AI-Driven Stocks and Mutual Funds Chatbot for Instant Queries .jpg',
    'Company Ticker Data Retrieval via Chatbot Execution.jpg',
  ],
  'CentsAbility – Basic Finance Tracker': [
    '1Homepage.png',
    '2Dashboard.png',
    '3Recording Transactions.png',
    '4Setting Monthly Budget.png',
    '5Currency Converter.png',
  ],
};

export default function Academics() {
  // Modal state
  const [openModalProjectIndex, setOpenModalProjectIndex] = useState<number | null>(null);
  const [openModalImageIndex, setOpenModalImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Global error handler for unhandled promise rejections
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.warn('Unhandled promise rejection:', event.reason);
      event.preventDefault();
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => window.removeEventListener('unhandledrejection', handleUnhandledRejection);
  }, []);

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
          const currentProject = miniProjects[openModalProjectIndex];
          const images = miniProjectImages[currentProject.title] || [];
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
    const images = miniProjectImages[projectTitle] || [];
    images.forEach((imageName) => {
      const img = new Image();
      img.onload = () => {
        // Image loaded successfully
      };
      img.onerror = () => {
        // Image failed to load - this prevents unhandled rejection
        console.warn(`Failed to preload image: /projects/${projectTitle}/${imageName}`);
      };
      img.src = `/projects/${projectTitle}/${imageName}`;
    });
  }, []);

  const handleOpenModal = (projectIndex: number) => {
    const project = miniProjects[projectIndex];
    setOpenModalProjectIndex(projectIndex);
    setOpenModalImageIndex(0);
    preloadImages(project.title);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn('Image failed to load:', event.currentTarget.src);
    setImageLoading(false);
    setImageError(true);
  };

  const handleCloseModal = () => {
    setOpenModalProjectIndex(null);
    setImageLoading(false);
    setImageError(false);
  };

  const handleGitHubLink = (githubUrl: string) => {
    window.open(githubUrl, "_blank");
  };

  // Mini projects data
  const miniProjects = [
    {
      title: 'Maintenance Monitoring Platform for Industrial Safety Automation',
      description: 'A web-based ML solution for predictive maintenance, real-time issue tracking, and preventive scheduling.',
      githubUrl: 'https://github.com/thehaniyaakhtar/Industrial-Safety-and-Maintenance-Monitoring-Hub',
      publicationStatus: 'Scopus publication in process.',
    },
    {
      title: 'Deep Learning-Powered Multi-Asset Forecasting Engine',
      description: 'Built using Streamlit and LSTM models to visualize market insights and automate predictions for informed financial decisions.',
      githubUrl: 'https://github.com/thehaniyaakhtar/Stock-Price-Predictor-and-Recommendation-System',
      publicationStatus: 'Scopus publication in process.',
    },
    {
      title: 'Spring Boot–Based Anonymous Feedback System',
      description: 'A secure, real-time anonymous feedback system enabling direct yet anonymous communication between students and teachers.',
      githubUrl: 'https://github.com/thehaniyaakhtar/Spring-Boot-based-Anonymous-Feedback-System',
      publicationStatus: null,
    },
    {
      title: 'CentsAbility – Basic Finance Tracker',
      description: 'Responsive website to manage personal income, expenses, and financial summaries using front-end and back-end integrations.',
      githubUrl: 'https://github.com/thehaniyaakhtar/CentsAbility-Basic-Finances-Tracking-Website',
      publicationStatus: null,
    },
  ];

  return (
    <div className={styles.academicsContainer}>
      <section className={styles.academicsSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/academics" className={styles.navLink + ' ' + styles.active}>Academics</a>
          <a href="/skills-certifications" className={styles.navLink}>Skills and Certifications</a>
          <a href="/contact" className={styles.navLink}>Get in Touch</a>
        </nav>
        
        {/* Main content */}
        <div className={styles.contentContainer}>
          <h1 className={styles.mainTitle}>Academics</h1>
          
          <div className={styles.introSection}>
            <p className={styles.introText}>
              Final-year B.Tech. student in Computer Science Engineering (AI & ML), Mumbai University – CGPA 8.96
              <br />
              Listed below are core subjects and certifications, academic projects and extra-curriculars.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Subjects</h2>
            
            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Data Science & Analytics</h3>
              
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Data Analytics & Visualization</h4>
                  <a className={styles.certificateButton} href="/certificates/DAV.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Data Warehousing & Mining</h4>
                  <a className={styles.certificateButton} href="/certificates/DWM.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Big Data Analytics</h4>
                  <span className={styles.publicationStatus} style={{color: '#a6a6a6', fontStyle: 'italic'}}>Ongoing</span>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Artificial Intelligence & Machine Learning</h3>
              
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Artificial Intelligence</h4>
                  <a className={styles.certificateButton} href="/certificates/AI.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Machine Learning</h4>
                  <a className={styles.certificateButton} href="/certificates/ML.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Deep Learning</h4>
                  <span className={styles.publicationStatus} style={{color: '#a6a6a6', fontStyle: 'italic'}}>Ongoing</span>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Mathematics & Theory</h3>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Engineering Mathematics III & IV</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Discrete Structures & Graph Theory</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Statistics</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Game Theory</h4>
                  <span className={styles.publicationStatus} style={{color: '#a6a6a6', fontStyle: 'italic'}}>Ongoing</span>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Programming & Foundations</h3>
              
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Python Programming (Cisco PCAP)</h4>
                  <a 
                    className={styles.certificateButton}
                    href="/certificates/PCEP.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Java Fundamentals (Oracle)</h4>
                  <a 
                    className={styles.certificateButton}
                    href="/certificates/ORACLE JAVA.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Data Structures & Algorithms</h4>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Systems, Security & Cloud Computing</h3>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Web Computing</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Distributed Computing</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Operating Systems</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Cloud Computing (AWS)</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Certificates:</strong></p>
                    <ul>
                      <li>AWS Academy Cloud Foundations.</li>
                      <li>AWS Academy Cloud Architecture.</li>
                    </ul>
                    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                      <a className={styles.certificateButton} href="/certificates/AWS Foundations.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                      <a className={styles.certificateButton} href="/certificates/AWS Architecture.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </div>
                </div>
                
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Database Management Systems</h4>
                  <div className={styles.certificateDetails}>
                 
                
                    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                      <a className={styles.certificateButton} href="/certificates/ORACLE DBMS Exam.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Natural Language Processing</h3>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>NLP</h4>
                  <span className={styles.publicationStatus} style={{color: '#a6a6a6', fontStyle: 'italic'}}>Ongoing</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Major Subjects</h2>
            
            <div className={styles.subjectGroup}>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
                <div className={styles.projectItem}>
                  <h3 className={styles.projectTitle}>Self-Optimizing Power Grid AI for Real-Time Energy Fraud Detection and Load Balancing</h3>
                  <span className={styles.publicationStatus} style={{color: '#a6a6a6', fontStyle: 'italic'}}>Ongoing</span>
                  <p className={styles.projectDescription}>
                    A real-time smart grid system leveraging Kafka streams and reinforcement learning to detect anomalies, predict demand, and dynamically optimise power distribution, preventing energy theft and blackouts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Mini Projects</h2>
            
            <div className={styles.subjectGroup}>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
                {miniProjects.map((project, index) => {
                  const images = miniProjectImages[project.title] || [];
                  const hasImages = images.length > 0;
                  
                  return (
                    <div key={index} className={styles.projectItem}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      {project.title === 'CentsAbility – Basic Finance Tracker' && (
                        <span className={styles.projectStatus} style={{color: '#fcac16', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px', display: 'block'}}>
                          My First Project!
                        </span>
                      )}
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                      <div className={styles.projectButtons}>
                        <a 
                          className={styles.githubButton}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View GitHub for details
                        </a>
                        {hasImages && (
                          <button
                            className={styles.githubButton}
                            onClick={() => handleOpenModal(index)}
                          >
                            View Project
                          </button>
                        )}
                      </div>
                      {project.publicationStatus && (
                        <span className={styles.publicationStatus} style={{marginTop: '18px', display: 'block'}}>
                          {project.publicationStatus}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
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
                      src={`/projects/${miniProjects[openModalProjectIndex].title}/${miniProjectImages[miniProjects[openModalProjectIndex].title][openModalImageIndex]}`}
                      alt={miniProjectImages[miniProjects[openModalProjectIndex].title][openModalImageIndex]}
                      className={styles.modalImage}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      style={{ display: imageLoading ? 'none' : 'block' }}
                    />
                  )}
                </div>
                
                {openModalImageIndex < (miniProjectImages[miniProjects[openModalProjectIndex].title]?.length || 0) - 1 && (
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
                  {miniProjectImages[miniProjects[openModalProjectIndex].title][openModalImageIndex]?.replace(/^\d+/, '').replace(/\.[^/.]+$/, '').replace(/^_/, '')}
                </div>
                
                <div className={styles.modalImageCounter}>
                  {openModalImageIndex + 1} / {miniProjectImages[miniProjects[openModalProjectIndex].title]?.length}
                </div>
              </div>
            </div>
          )}

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Other Recognized Certifications</h2>
            <div className={styles.subjectGroup}>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Red Hat DO180 – Containers & Kubernetes</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Learned containerization, orchestration, AWS architecture, and cloud principles.</p>
                    <a className={styles.certificateButton} href="/certificates/RH DOF.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>AWS Academy Data Engineering</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Focused on ETL pipelines, Redshift, Glue, and scalable data processing on AWS.</p>
                    <a className={styles.certificateButton} href="/certificates/AWS DE.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>GDG GenAI Study Jam</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Explored GenAI tools, models, and multi-LLM platforms for productivity.</p>
                    <a className={styles.certificateButton} href="/certificates/GDG.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Cybersecurity Virtual Internship (Palo Alto)</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Completed a virtual internship focused on cybersecurity principles and hands-on labs with Palo Alto Networks.</p>
                    <a className={styles.certificateButton} href="/certificates/Palo Alto.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Google AI-ML Virtual Internship</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Participated in a virtual internship with Google, focusing on AI and machine learning tools and workflows.</p>
                    <a className={styles.certificateButton} href="/certificates/AIML.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Departmental Involvement</h2>
            <div className={styles.subjectGroup}>
              <div className={styles.leadershipItem}>
                <h3 className={styles.leadershipTitle}>Magazine Coordinator (2nd Year)</h3>
                <p className={styles.leadershipDescription}>
                  Drafted event reports, authored technical articles, and coordinated content for the department's Student Association.
                </p>
              </div>
            </div>
            <div className={styles.subjectGroup}>
              <div className={styles.leadershipItem}>
                <h3 className={styles.leadershipTitle}>Operations Head – Google Developer Groups on Campus, APSIT (3rd Year)</h3>
                <p className={styles.leadershipDescription}>
                  Led institutional-level planning and execution of high-impact technical events, collaborating with speakers and managing teams of 20+ volunteers.
                </p>
                <div className={styles.eventsSection}>
                  <h4 className={styles.eventsTitle}>Some Key Highlights</h4>
                  <ul className={styles.eventsList}>
                    <li><strong>GenAI X Pieces: The Hidden Treasure</strong> – A hands-on workshop with industry expert Ali Mustufa on multi-LLM tools and AI workflows.</li>
                    <li><strong>SQL Bootcamp 2025</strong> – Conducted a 3-day intensive SQL training with real-world projects including a Restaurant Management System.</li>
                    <li><strong>Game Development with Unity</strong> – Facilitated a live development session with a professional Unity developer.</li>
                  </ul>
                </div>
                <p className={styles.leadershipDescription}>
                  Leadership experience includes coordinating large-scale technical events, managing diverse teams, and working closely with industry experts. These roles have built strong communication, organization, and cross-functional collaboration skills—complementing the technical foundation with practical, real-world execution.                
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 