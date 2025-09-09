'use client'

import { useState } from 'react'
import Image from 'next/image'

type Tab = 'Education' | 'Experience' | 'Projects' | 'Skills'

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<Tab>('Experience')
  const [expandedExperience, setExpandedExperience] = useState<{[key: string]: boolean}>({})
  const tabs: Tab[] = ['Experience', 'Projects', 'Skills', 'Education']

  const toggleExpanded = (jobId: string) => {
    setExpandedExperience(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }))
  }

  return (
    <div className="home-container">
      {/* Header */}
      <div className="home-hero">
        <Image
          src="/profile.JPG"
          alt="Zoë Dauphinee"
          width={180}
          height={180}
          className="home-profile-image"
        />
        <h1 className="home-title">Zoë Dauphinee</h1>
        <p className="home-subtitle">Full Stack Software Engineer</p>
      </div>

      {/* Tabs */}
      <div className="resume-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`resume-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="resume-content">

        {/* Experience */}
        {activeTab === 'Experience' && (
          <div className="resume-section">
            <div className="resume-card">
              <div className="resume-card-header">
                <h3>Full Stack Software Developer, Greater Midland</h3>
                <p className="resume-meta">July 2025 – Present</p>
              </div>
              <div className="experience-content">
                <ul className="list-disc list-inside">
                  <li>Built a full-stack League Management System with custom user roles, registration, scheduling, and standings features using Firebase and React, improving operational efficiency and user experience for 400+ local athletes and staff.</li>
                  <li>Developed a role-based authentication system via Firebase Auth with secure, scalable routing logic to tailor feature access across three distinct user types.</li>
                  {expandedExperience['midland'] && (
                    <>
                      <li>Replaced manually updated PDFs by deploying a fully custom activities calendar that auto-ingests RecTrac CSVs via FTP, rendering dynamic, filterable weekly views that reduced staff workload and improved accessibility for 300,000+ community members.</li>
                      <li>Led UI/UX design and stakeholder collaboration for a new WordPress-based website, replacing legacy Squarespace infrastructure and rebuilding the organization&apos;s public presence to align with accessibility, usability, and brand standards.</li>
                      <li>Designed responsive web interfaces and interactive components using React, HTML/CSS, and JavaScript, achieving SEO readiness and WCAG compliance for public-facing platforms.</li>
                    </>
                  )}
                </ul>
                {!expandedExperience['midland'] && (
                  <div className="fade-gradient">
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleExpanded('midland')}
                    >
                      Read more
                    </button>
                  </div>
                )}
                {expandedExperience['midland'] && (
                  <button 
                    className="read-more-btn show-less"
                    onClick={() => toggleExpanded('midland')}
                  >
                    Show less
                  </button>
                )}
              </div>
            </div>

            <div className="resume-card">
              <div className="resume-card-header">
                <h3>Software Engineer Intern, Overland-Tandberg</h3>
                <p className="resume-meta">May 2024 – August 2024</p>
              </div>
              <div className="experience-content">
                <ul className="list-disc list-inside">
                  <li>Engineered a Flask-RESTx &quot;Phone Home&quot; service integrated into the existing microservice framework, enabling real-time device telemetry for deployed units.</li>
                  <li>Designed a client-side data collection mechanism to anonymize and transmit usage metrics, ensuring compliance with privacy standards and enabling advanced usage analytics.</li>
                  {expandedExperience['overland'] && (
                    <>
                      <li>Collaborated with the database administrator to define the schema and implemented robust validation using custom Flask marshalling logic, eliminating type mismatches, preventing potential data loss, and ensuring system integrity.</li>
                      <li>Delivered a final project demo to the Chief Operating Officer, showcasing the project&apos;s alignment with business goals and its facilitation of data-driven decision-making.</li>
                      <li>Created a Windows desktop service to monitor and log employee backup compliance, integrating with existing automated backup infrastructure to increase backup policy adherence across the organization.</li>
                    </>
                  )}
                </ul>
                {!expandedExperience['overland'] && (
                  <div className="fade-gradient">
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleExpanded('overland')}
                    >
                      Read more
                    </button>
                  </div>
                )}
                {expandedExperience['overland'] && (
                  <button 
                    className="read-more-btn show-less"
                    onClick={() => toggleExpanded('overland')}
                  >
                    Show less
                  </button>
                )}
              </div>
            </div>
          </div>
        )}


        {/* Projects */}
        {activeTab === 'Projects' && (
          <div className="resume-section">
            <div className="resume-card">
              <h3>Legal Document Analyzer</h3>
              <h5 className="resume-meta">On-Device AI Builders Hackathon - Qualcomm, Microsoft, LM Studio</h5>
              <ul className="list-disc list-inside">
                <li>Developed a localized AI agent using Python, Flask, and LM Studio for comprehensive risk and bias assessments of legal documents.</li>
                <li>Leveraged Microsoft&apos;s ONNX Runtime and LM Studio for secure, on-device inference with optimized speed, model accuracy, and cost effectiveness.</li>
                <li>Won first place and was featured by Qualcomm for its innovative approach and transformative potential to AI localization.</li>
              </ul>

              <div className="mt-4 space-x-4 text-sm">
                <a
                  href="https://www.youtube.com/watch?v=v513FoIXxWk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-200"
                >
                  Watch our YouTube interview
                </a>
                </div>

              <div className="mt-4 space-x-4 text-sm">
                <a
                  href="https://github.com/Gankhulug456/Qualcomm-Hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-200"
                >
                  Try it yourself!
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Skills */}
        {activeTab === 'Skills' && (
          <div className="skills-grid">
            <div className="skill-item">
              <h4>Programming Languages</h4>
              <p>Python, Java, Javascript, HTML/CSS, C, C++</p>
            </div>
            <div className="skill-item">
              <h4>Frameworks & Libraries</h4>
              <p>React, Flask, Node.js, Express.js</p>
            </div>
            <div className="skill-item">
              <h4>Cloud & Hosting Platforms</h4>
              <p>Firebase (Auth, Firestore, Hosting), Vercel, AWS (S3, Cloud Concepts)</p>
            </div>
            <div className="skill-item">
              <h4>Developer Tools & Services</h4>
              <p>GitHub, GitHub Actions (CI/CD, scheduling), Visual Studio Code, Visual Studio, PyCharm, Jira, MongoDB</p>
            </div>
            <div className="skill-item">
              <h4>Operating Systems</h4>
              <p>Linux (Ubuntu), macOS, Microsoft Windows</p>
            </div>
          </div>
        )}

        {/* Education */}
        {activeTab === 'Education' && (
          <div className="resume-section">
            <div className="resume-card">
            <div className="resume-card-header">
                <h3>B.S. Computer Science, New York University</h3>
                <p className="resume-meta">September 2021 – May 2025</p>
              </div>
              <h4>Relevant coursework:</h4>
              <ul className="list-disc list-inside">
              <li>Artificial Intelligence</li>
              <li>Computer Architecture and Organization</li>
              <li>Computer Networking</li>
              <li>Data Analysis and Statistics</li>
              <li>Data Structures and Algorithms</li>
              <li>Machine Learning</li>
              <li>Natural Language Processing</li>
              <li>Object Oriented Programming</li>
              <li>Operating Systems</li>
              <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
