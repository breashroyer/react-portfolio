// src/components/AboutMe/AboutMe.js

import React from 'react';
import './AboutMe.css';
import myPhoto from './profilepic.jpg'; // Corrected path

function AboutMe() {
  return (
    <div className="about-me">
      <img src={myPhoto} alt="About Me" />
      <p>I'm Breanna De Nino, a Training Manager with a passion for developing impactful learning and development programs. Certified in Scrum Master (CSM) and Instructional Design (IMP), my journey from Operations Trainer at Alorica to Training Manager at SnapCare reflects my dedication to fostering a learning-first culture. My experience spans designing training programs from scratch, enhancing employee performance, and leading innovative training methodologies. I'm proud of my achievements, including the Platinum Club award, which underscore my commitment to excellence in training and development across various sectors.</p>
    </div>
  );
}

export default AboutMe;

