"use client";
import styles from "./academics.module.css";
import Link from 'next/link';

export default function Academics() {
  return (
    <div className={styles.academicsContainer}>
      <section className={styles.academicsSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/academics" className={styles.navLink + ' ' + styles.active}>Academics</Link>
          <Link href="/skills-certifications" className={styles.navLink}>Skills and Certifications</Link>
          <Link href="/contact" className={styles.navLink}>Get in Touch</Link>
        </nav>
        
        {/* Main content */}
        <div className={styles.contentContainer}>
          <h1 className={styles.mainTitle}>Academics</h1>
          
          <div className={styles.introSection}>
            <p className={styles.introText}>
              Final-year B.Tech. student in Computer Science Engineering (AI &amp; ML), Mumbai University &ndash; CGPA 8.96
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
            <h2 className={styles.sectionTitle}>Major Project</h2>
            
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
                <div className={styles.projectItem}>
                  <h3 className={styles.projectTitle}>Maintenance Monitoring Platform for Industrial Safety Automation</h3>
                  <p className={styles.projectDescription}>
                    A web-based ML solution for predictive maintenance, real-time issue tracking, and preventive scheduling.
                  </p>
                  <div className={styles.projectButtons}>
                    <a 
                      className={styles.githubButton}
                      href="https://github.com/thehaniyaakhtar/Industrial-Safety-and-Maintenance-Monitoring-Hub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View GitHub for details
                    </a>
                  </div>
                  <span className={styles.publicationStatus} style={{marginTop: '18px', display: 'block'}}>Scopus publication in process.</span>
                </div>

                <div className={styles.projectItem}>
                  <h3 className={styles.projectTitle}>Deep Learning-Powered Multi-Asset Forecasting Engine</h3>
                  <p className={styles.projectDescription}>
                    Built using Streamlit and LSTM models to visualize market insights and automate predictions for informed financial decisions.
                  </p>
                  <div className={styles.projectButtons}>
                    <a 
                      className={styles.githubButton}
                      href="https://github.com/thehaniyaakhtar/Stock-Price-Predictor-and-Recommendation-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View GitHub for details
                    </a>
                  </div>
                  <span className={styles.publicationStatus} style={{marginTop: '18px', display: 'block'}}>Scopus publication in process.</span>
                </div>

                <div className={styles.projectItem}>
                  <h3 className={styles.projectTitle}>Spring Boot–Based Anonymous Feedback System</h3>
                  <p className={styles.projectDescription}>
                    A secure, real-time anonymous feedback system enabling direct yet anonymous communication between students and teachers.
                  </p>
                  <div className={styles.projectButtons}>
                    <a 
                      className={styles.githubButton}
                      href="https://github.com/thehaniyaakhtar/Spring-Boot-based-Anonymous-Feedback-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View GitHub for details
                    </a>
                  </div>
                </div>

                <div className={styles.projectItem}>
                  <h3 className={styles.projectTitle}>CentsAbility – Basic Finance Tracker</h3>
                  <p className={styles.projectDescription}>
                    Responsive website to manage personal income, expenses, and financial summaries using front-end and back-end integrations.
                  </p>
                  <div className={styles.projectButtons}>
                    <a 
                      className={styles.githubButton}
                      href="https://github.com/thehaniyaakhtar/CentsAbility-Basic-Finances-Tracking-Website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View GitHub for details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  Drafted event reports, authored technical articles, and coordinated content for the department&apos;s Student Association.
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