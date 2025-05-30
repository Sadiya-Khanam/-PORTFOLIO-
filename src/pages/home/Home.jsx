import React from "react";
import profileImg from '../../assets/sadiyapic.jpeg';
import styles from './Home.module.css'; // Import the CSS Module

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img src={profileImg} alt="Sadiya Khan Profile" className={styles.image} />
        <h1 className={styles.title}>Sadiya Khanam</h1>
        <h2 className={styles.role}>Software Developer</h2>
        <p className={styles.description}>
          Motivated and detail-oriented Software Developer with a strong foundation in Java, React, Spring Boot, SQL, and web development. Passionate about problem-solving, data structures, and building scalable applications. Seeking an opportunity to apply technical skills and contribute to innovative projects in a collaborative environment.
        </p>
        {/* Buttons directly within the content div */}
      </div>
    </section>
  );
};


export default Home;
