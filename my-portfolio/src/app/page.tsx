'use client'

import { useState } from 'react'
import Image from 'next/image'

import {
  EnvelopeClosedIcon,
  MobileIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

type Tab = 'Education' | 'Experience' | 'Projects' | 'Skills' | 'Contact'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>('Education')
  const tabs: Tab[] = ['Education', 'Experience', 'Projects', 'Skills', 'Contact']

  return (
    <div className="profile-card">
      {/* Header */}
      <div className="profile-header">
        <Image
          src="/header.jpeg"
          alt="City Skyline"
          width={800}
          height={240}
          className="header-img"
        />
        <div className="profile-overlay">
          <Image
            src="/profile.JPG"
            alt="Zoe Dauphinee"
            width={120}
            height={120}
            className="avatar-img"
          />
        </div>
      </div>

      {/* Bio */}
      <div className="profile-bio">
        <h1>Zoë Dauphinee</h1>
        <p>
          NYU Computer Science | Software Engineer
        </p>
      </div>

      {/* Tabs */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content">

        {/* Education as full-width cards */}
        {activeTab === 'Education' && (
          <div className="education-cards">
            <div className="vertical-card">
            <div className="card-header">
                <h3>B.S. Computer Science, New York University</h3>
                <p className="info-meta">September 2021 – May 2025</p>
              </div>
              <p>Relevant coursework:</p>
              <ul className="list-disc list-inside">
                <li>Data Structures and Algorithms</li>
                <li>Object Oriented Programming</li>
                <li>Data Analysis and Statistics</li>
                <li>Computer Architecture and Organization</li>
                <li>Artificial Intelligence</li>
                <li>Operating Systems</li>
                <li>Computer Networking</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
        )}

        {/* Experience */}
        {activeTab === 'Experience' && (
          <div className="experience-cards">
            <div className="vertical-card">
              <div className="card-header">
                <h3>Software Developer, NYU Athletics</h3>
                <p className="info-meta">October 2024 – May 2025</p>
              </div>
              <ul className="list-disc list-inside">
                <li>Developed a full-stack application for the NYU Taekwondo team using React.js, Node.js, and MongoDB.</li>
                <li>Integrated Stripe API for automated payments, Google Calendar API for event scheduling, and SendGrid API for automated email notifications.</li>
                <li>Built a role-based dashboard for tracking dues, managing event registrations, and visualizing payment data with Chart.js.</li>
                <li>Used a CI/CD pipeline for efficient deployment.</li>
              </ul>
            </div>

            <div className="vertical-card">
              <div className="card-header">
                <h3>Software Engineer Intern, Overland-Tandberg</h3>
                <p className="info-meta">May 2024 – August 2024</p>
              </div>
              <ul className="list-disc list-inside">
                <li>Implemented a new Phone Home service using Flask-RESTx, integrating it into the existing microservice framework as a shipping product.</li>
                <li>Developed a client-side mechanism for anonymized usage data collection, ensuring privacy compliance and enabling nuanced analysis.</li>
                <li>Collaborated with the DBA to define the schema and marshalled data against custom Flask-RESTx models to prevent data loss.</li>
                <li>Presented the completed project to the COO, highlighting its business-alignment and analytics capabilities.</li>
                <li>Built a Windows desktop service to monitor and record employee backup activities, integrating it into an automated backup pipeline.</li>
              </ul>
            </div>
          </div>
        )}


        {/* Projects as full-width cards */}
        {activeTab === 'Projects' && (
          <div className="project-cards">
            <div className="vertical-card">
              <h3>Legal Document Analyzer, On-Device AI Builders Hackathon (Qualcomm, Microsoft, LM Studio)</h3>
              <ul className="list-disc list-inside">
                <li>Developed a localized AI agent using Python, Flask, and LM Studio for comprehensive risk assessments of legal documents, analyzing clauses for potential risks and biases, winning first place for its innovative approach to AI localization.</li>
                <li>Leveraged Microsoft’s ONNX Runtime and LM Studio to optimize on-device processing, ensuring data privacy, model accuracy, and cost effectiveness.</li>
                <li>Featured by Qualcomm for its cutting-edge implementation and transformative potential.</li>
              </ul>

              {/* extra links */}
              {/* <div className="mt-4 space-x-4 text-sm">
                <a
                  href="https://linkedin.com/posts/…qualcomm-post…"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-200"
                >
                  Read our blog post
                </a>
              </div> */}

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

        {/* Skills as small cards */}
        {activeTab === 'Skills' && (
          <div className="skill-cards">
            <div className="vertical-card">
              <h3>Languages</h3>
              <p>Python, C, C++, Java, HTML/CSS, JavaScript</p>
            </div>
            <div className="vertical-card">
              <h3>Frameworks</h3>
              <p>Flask, React, Node.js</p>
            </div>
            <div className="vertical-card">
              <h3>Developer Tools</h3>
              <p>Github, VS Code, Visual Studio, PyCharm, Jira, MongoDB</p>
            </div>
            <div className="vertical-card">
              <h3>Operating Systems</h3>
              <p>Linux (Ubuntu), macOS, Microsoft Windows</p>
            </div>
          </div>
        )}

        {/* Contact as 2-column square cards */}
        {activeTab === 'Contact' && (
          <div className="contact-cards">
            <a href="mailto:zoe.dauphinee@gmail.com" className="contact-card">
              <EnvelopeClosedIcon className="card-icon" />
              <h3>Email</h3>
            </a>
            <a href="tel:9894889848" className="contact-card">
              <MobileIcon className="card-icon" />
              <h3>Phone</h3>
            </a>
            <a
              href="https://github.com/dauphineezc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <GitHubLogoIcon className="card-icon" />
              <h3>GitHub</h3>
            </a>
            <a
              href="https://linkedin.com/in/zoedauphinee"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <LinkedInLogoIcon className="card-icon" />
              <h3>LinkedIn</h3>
            </a>
          </div>
        )}

      </div>
    </div>
  )
}
