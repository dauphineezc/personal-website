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
  const tabs: Tab[] = ['Experience', 'Projects', 'Skills', 'Education', 'Contact']

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

        {/* Experience */}
        {activeTab === 'Experience' && (
          <div className="experience-cards">
            <div className="vertical-card">
              <div className="card-header">
                <h3>Full Stack Software Developer, Greater Midland</h3>
                <p className="info-meta">July 2025 – Present</p>
              </div>
              <ul className="list-disc list-inside">
                <li>Built a full-stack League Management System with custom user roles, registration, scheduling, and standings features using Firebase and React, improving operational efficiency and user experience for 400+ local athletes and staff.</li>
                <li>Developed a role-based authentication system via Firebase Auth with secure, scalable routing logic to tailor feature access across three distinct user types.</li>
                <li>Replaced manually updated PDFs by deploying a fully custom activities calendar that auto-ingests RecTrac CSVs via FTP, rendering dynamic, filterable weekly views that reduced staff workload and improved accessibility for 300,000+ community members.</li>
                <li>Led UI/UX design and stakeholder collaboration for a new WordPress-based website, replacing legacy Squarespace infrastructure and rebuilding the organization’s public presence to align with accessibility, usability, and brand standards.</li>
                <li>Designed responsive web interfaces and interactive components using React, HTML/CSS, and JavaScript, achieving SEO readiness and WCAG compliance for public-facing platforms.</li>
            </div>

            <div className="vertical-card">
              <div className="card-header">
                <h3>Software Engineer Intern, Overland-Tandberg</h3>
                <p className="info-meta">May 2024 – August 2024</p>
              </div>
              <ul className="list-disc list-inside">
              <li>Engineered a Flask-RESTx “Phone Home” service integrated into the existing microservice framework, enabling eal-time device telemetry for deployed units.</li>
              <li>Designed a client-side data collection mechanism to anonymize and transmit usage metrics, ensuring compliance with privacy standards and enabling advanced usage analytics.</li>
              <li>Collaborated with the database administrator to define the schema and implemented robust validation using custom Flask marshalling logic, eliminating type mismatches, preventing potential data loss, and ensuring system integrity.</li>
              <li>Delivered a final project demo to the Chief Operating Officer, showcasing the project's alignment with business goals and its facilitation of data-driven decision-making.</li>
              <li>Created a Windows desktop service to monitor and log employee backup compliance, integrating with existing automated backup infrastructure to increase backup policy adherence across the organization.</li>
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
                <li>Developed a localized AI agent using Python, Flask, and LM Studio for comprehensive risk and bias assessments of legal documents.</li>
                <li>Leveraged Microsoft’s ONNX Runtime and LM Studio for secure, on-device inference with optimized speed, model accuracy, and cost effectiveness.</li>
                <li>Won first place and was featured by Qualcomm for its innovative approach and transformative potential to AI localization.</li>
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
              <h3>Programming Languages</h3>
              <p>Python, Java, Javascript, HTML/CSS, C, C++</p>
            </div>
            <div className="vertical-card">
              <h3>Frameworks & Libraries</h3>
              <p>React, Flask, Node.js, Express.js</p>
            </div>
            <div className="vertical-card">
              <h3>Cloud & Hosting Platforms</h3>
              <p>Firebase (Auth, Firestore, Hosting), Vercel, AWS (S3, Cloud Concepts)</p>
            </div>
            <div className="vertical-card">
              <h3>Developer Tools & Services</h3>
              <p>GitHub, GitHub Actions (CI/CD, scheduling), Visual Studio Code, Visual Studio, PyCharm, Jira, MongoDB</p>
            </div>
            <div className="vertical-card">
              <h3>Operating Systems</h3>
              <p>Linux (Ubuntu), macOS, Microsoft Windows</p>
            </div>
          </div>
        )}

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
