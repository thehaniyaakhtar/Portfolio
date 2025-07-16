"use client";
import styles from "./academics.module.css";

export default function Academics() {
  const handleGitHubLink = (githubUrl: string) => {
    window.open(githubUrl, "_blank");
  };

  return (
    <div className={styles.academicsContainer}>
      <section className={styles.academicsSection}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/academics" className={styles.navLink + ' ' + styles.active}>Academics</a>
          <a href="#" className={styles.navLink}>Skills and Certifications</a>
          <a href="/contact" className={styles.navLink}>Get in Touch</a>
        </nav>
        
        {/* Main content */}
        <div className={styles.contentContainer}>
          <h1 className={styles.mainTitle}>Academics</h1>
          
          <div className={styles.introSection}>
            <p className={styles.introText}>
              Currently in Semester 7 of Computer Science Engineering (Artificial Intelligence and Machine Learning), with a CGPA of 8.6, as of Semester 5 from Mumbai University. The curriculum integrates key areas such as Data Science and Analytics, Machine Learning and Cloud Technologies. This foundation is complemented by industry-recognized certifications and practical projects that apply theoretical knowledge to real-world problem-solving.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Subjects</h2>
            
            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Data Science & Analytics</h3>
              
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Data Analytics & Visualization</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Gained hands-on experience in analyzing and interpreting data using Google Analytics, focusing on extracting actionable insights and optimizing digital strategies.</p>
                    <a className={styles.certificateButton} href="/certificates/1.png" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Data Warehousing & Mining</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Visualized and optimized business processes using process mining tools.</p>
                    <a className={styles.certificateButton} href="/certificates/2.jfif" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Artificial Intelligence & Machine Learning</h3>
              
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Artificial Intelligence</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Studied and implemented generative AI through diffusion-based methods.</p>
                    <a className={styles.certificateButton} href="/certificates/3.jfif" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Machine Learning</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Covered regression, classification, and supervised ML workflows.</p>
                    <a className={styles.certificateButton} href="/certificates/4.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Mathematics & Theory</h3>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Engineering Mathematics III & IV</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Discrete Structures & Graph Theory</h4>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Statistics</h4>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Programming & Foundations</h3>
              
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Python Programming (Cisco PCAP)</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Covered core Python, OOP, file handling, and modules.</p>
                    <a 
                      className={styles.certificateButton}
                      href="/certificates/python-cisco-pcap.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Java Fundamentals (Oracle)</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Core Java programming and OOP principles.</p>
                    <a 
                      className={styles.certificateButton}
                      href="/certificates/java-oracle.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Data Structures & Algorithms</h4>
                </div>
              </div>
            </div>

            <div className={styles.subjectGroup}>
              <h3 className={styles.subjectTitle}>Systems, Security & Cloud Computing</h3>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
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
                      <a className={styles.certificateButton} href="/certificates/1.png" target="_blank" rel="noopener noreferrer">View Certificate</a>
                      <a className={styles.certificateButton} href="/certificates/2.jfif" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Database Management Systems</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Certificates:</strong></p>
                    <ul>
                      <li>Database Foundations – Course Completion.</li>
                      <li>Database Foundations – Final Exam.</li>
                    </ul>
                    <p><strong>Description:</strong> Covered SQL, relational schema, normalization, and indexing.</p>
                    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                      <a className={styles.certificateButton} href="/certificates/3.jfif" target="_blank" rel="noopener noreferrer">View Certificate</a>
                      <a className={styles.certificateButton} href="/certificates/4.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Mini Projects</h2>
            
            <div className={styles.subjectGroup}>
              <div className={styles.certificationsGrid} style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
                <div className={styles.projectItem}>
                  <h3 className={styles.projectTitle}>Industrial Safety and Maintenance Monitoring Hub</h3>
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
                  <h3 className={styles.projectTitle}>Stock Price Predictor and Recommendation System</h3>
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
                    <a className={styles.certificateButton} href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>AWS Academy Data Engineering</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Focused on ETL pipelines, Redshift, Glue, and scalable data processing on AWS.</p>
                    <a className={styles.certificateButton} href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>GDG GenAI Study Jam</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Explored GenAI tools, models, and multi-LLM platforms for productivity.</p>
                    <a className={styles.certificateButton} href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Cybersecurity Virtual Internship (Palo Alto)</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Completed a virtual internship focused on cybersecurity principles and hands-on labs with Palo Alto Networks.</p>
                    <a className={styles.certificateButton} href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  </div>
                </div>
                <div className={styles.certificateItem}>
                  <h4 className={styles.certificateTitle}>Google AI-ML Virtual Internship</h4>
                  <div className={styles.certificateDetails}>
                    <p><strong>Description:</strong> Participated in a virtual internship with Google, focusing on AI and machine learning tools and workflows.</p>
                    <a className={styles.certificateButton} href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
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
              </div>
            </div>
            <p className={styles.leadershipSummary}>
              Leadership experience includes coordinating large-scale technical events, managing diverse teams, and working closely with industry experts. These roles have built strong communication, organization, and cross-functional collaboration skills—complementing the technical foundation with practical, real-world execution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 