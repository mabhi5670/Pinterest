import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div>
      <a
        href='/'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.about}
      >
        About
      </a>
    </div>
  );
};

export default About;
