    import React from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faDownload, faFlag, faEnvelope, faUser, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
    import { faReact, faJava, faHtml5, faCss3, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
    import styles from './About.module.css';
    import resumePDF from '../../assets/Sadiya_Khanam resume.pdf'; 

    const About = () => {
      return (
        <section className={styles.about}>
          <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            

            <div className={styles.personalInfo}>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <ul className={styles.infoList}>
                <li><FontAwesomeIcon icon={faUser} className={styles.icon} /> <span className={styles.infoLabel}>First Name:</span> Sadiya</li>
                <li><FontAwesomeIcon icon={faUser} className={styles.icon} /> <span className={styles.infoLabel}>Last Name:</span> Khanam</li>
                <li><FontAwesomeIcon icon={faFlag} className={styles.icon} /> <span className={styles.infoLabel}>Nationality:</span> Indian</li>
                <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> <span className={styles.infoLabel}>Email:</span> khanamsadiya1234@gmail.com</li>
              </ul>
              <a href={resumePDF} className={styles.downloadButton} download>
                <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} /> Download CV
              </a>
            </div>

            <div className={styles.skills}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faJava} className={styles.skillIcon} /> <span className={styles.skillName}>Java</span></div>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faReact} className={styles.skillIcon} /> <span className={styles.skillName}>React</span></div>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faDatabase} className={styles.skillIcon} /> <span className={styles.skillName}>SQL</span></div>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faHtml5} className={styles.skillIcon} /> <span className={styles.skillName}>HTML5</span></div>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faCss3} className={styles.skillIcon} /> <span className={styles.skillName}>CSS3</span></div>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faJs} className={styles.skillIcon} /> <span className={styles.skillName}>JavaScript</span></div>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faCode} className={styles.skillIcon} /> <span className={styles.skillName}>Springboot</span></div>
                <div className={styles.skillItem}><FontAwesomeIcon icon={faGithub} className={styles.skillIcon} /> <span className={styles.skillName}>Github</span></div>
              </div>
            </div>

            <div className={styles.education}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.educationItem}>
                <h3 className={styles.institution}>Savitribai Phule Pune University</h3>
                <p className={styles.year}>2024</p>
                <p className={styles.course}>Masters of Computer Applications</p>
              </div>
              <div className={styles.educationItem}>
                <h3 className={styles.institution}>Deen Dayal Upadhayay Gorakhpur University</h3>
                <p className={styles.year}>2022</p>
                <p className={styles.course}>Bachlero's of Science (B.Sc) in Mathematics</p>
              </div>
              <div className={styles.educationItem}>
                <h3 className={styles.institution}>RPM Academy</h3>
                <p className={styles.year}>2019</p>
                <p className={styles.course}>Intermediate(Class 12)</p>
              </div>
              <div className={styles.educationItem}>
                <h3 className={styles.institution}>Hope Dyson Memorial School</h3>
                <p className={styles.year}>2017</p>
                <p className={styles.course}>High School (Class 10)</p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default About;
    
