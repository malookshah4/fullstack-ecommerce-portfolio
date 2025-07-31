import React from 'react';
import { FiLinkedin, FiGithub, FiArrowRight,FiBriefcase } from 'react-icons/fi';
import './AboutPage.css'; // We will create this CSS file next
import myProfileImage from '../assets/malookshah.jpg';

// A simple, modern SVG logo for Lumen Labs
const LumenLabsLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#1F2937"/>
    <path d="M14 14L26 26" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M14 26L26 14" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* --- Hero Section --- */}
        <header className="about-hero">
          <div className="hero-image-wrapper">
            {/* Placeholder for your image - replace with your actual photo URL */}
            <img 
              src={myProfileImage} 
              alt="Malook Shah" 
              className="hero-image"
            />
          </div>
          <h1 className="hero-title">Malook Shah</h1>
          <p className="hero-subtitle">Full-Stack Developer &amp; UI/UX Enthusiast</p>
          <div className="company-info">
            <LumenLabsLogo />
            <span>from <strong>Lumen Labs</strong></span>
          </div>
        </header>

        {/* --- Bio Section --- */}
        <section className="about-bio">
          <p>
            I am a passionate developer, with a love for building beautiful, intuitive, and high-performance web applications. My journey in technology is driven by a desire to solve complex problems with clean, elegant solutions. This project is a showcase of my skills in creating modern, full-stack applications using React, Redux, and Node.js.
          </p>
        </section>

        {/* --- Skills Section --- */}
        <section className="about-skills">
          <h2 className="section-title">Web Development Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">React & Redux</div>
            <div className="skill-card">Node.js & Express</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">UI/UX Design</div>
            <div className="skill-card">API Development</div>
            <div className="skill-card">Modern CSS</div>
          </div>
        </section>

        <section className="about-skills">
          <h2 className="section-title">Android Development</h2>
          <div className="skills-grid">
            <div className="skill-card">Kotlin</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">Jetpack Compose</div>
            <div className="skill-card">XML Layouts</div>
          </div>
        </section>

        <section className="about-skills">
          <h2 className="section-title">Game Development</h2>
          <div className="skills-grid">
            <div className="skill-card">Unity</div>
            <div className="skill-card">C# Scripting</div>
          </div>
        </section>


        {/* --- Contact & Socials Section --- */}
        <footer className="about-footer">
          <h2 className="section-title">Let's Connect</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.</p>
          <div className="social-links">
            <a href="https://github.com/malookshah4" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FiGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://www.upwork.com/freelancers/~019d261ed77653fb44" target="_blank" rel="noopener noreferrer" className="social-link upwork">
              <FiBriefcase /> Upwork
            </a>
          </div>
          <a href="mailto:malookshah96@gmail.com" className="contact-button">
            Get in Touch <FiArrowRight />
          </a>
        </footer>

      </div>
    </div>
  );
};

export default AboutPage;