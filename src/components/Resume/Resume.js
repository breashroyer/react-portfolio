import React from 'react';
import './Resume.css';
import resumePdf from './resume.pdf';

function Resume() {
  return (
    <div className="resume" id="resume">
      <a href={resumePdf} download="resume.pdf">Download My Resume</a>
    </div>
  );
}

export default Resume;

