'use client'
import { useState } from 'react'
import Image from 'next/image'

type Tab = 'Education' | 'Experience' | 'Projects' | 'Contact'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>('Education')
  const tabs: Tab[] = ['Education', 'Experience', 'Projects', 'Contact']

  return (
    <div className="profile-card">
      {/* all the old content lives INSIDE this wrapper */}
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
            src="/profile.jpg"
            alt="Zoe Dauphinee"
            width={120}
            height={120}
            className="avatar-img"
          />
        </div>
      </div>

      <div className="profile-bio">
        <h1>Zoe Dauphinee</h1>
        <p>
          I’m a Computer Science student at NYU (’25). I build full-stack apps,
          explore AI/ML, and craft data-driven solutions. Off-screen, I practice
          Taekwondo and read Spanish novels.
        </p>
      </div>

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

      <div className="tab-content">
        {activeTab === 'Education' && (
          <ul>
            <li><strong>NYU Tandon</strong> — B.S. Computer Science (2021-2025)</li>
            <li>GPA: 3.8 / 4.0</li>
            <li>Courses: Data Structures, AI & ML, Web Dev</li>
          </ul>
        )}
        {activeTab === 'Experience' && (
          <ul>
            <li>
              <strong>Software Developer, NYU Athletics</strong> (’24-Present)<br/>
              Built React/Node full-stack portal.
            </li>
            <li>
              <strong>Intern, Overland Tandberg</strong> (’24)<br/>
              Created Flask-RESTx telemetry microservice.
            </li>
          </ul>
        )}
        {activeTab === 'Projects' && (
          <ul>
            <li>
              <a href="https://github.com/dauphineezc/nyu-athletics" target="_blank">
                NYU Athletics Dashboard
              </a>
            </li>
            <li>
              <a href="https://github.com/dauphineezc/phone-home" target="_blank">
                Phone Home Service
              </a>
            </li>
          </ul>
        )}
        {activeTab === 'Contact' && (
          <ul className="contact-list">
            <li>
              <a href="mailto:zoe.dauphinee@gmail.com" className="contact-link">
                {/* Heroicon Mail */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>zoe.dauphinee@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:1234567890" className="contact-link">
                {/* Heroicon Phone */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.664 5.36a1 1 0 01-.217 1.09l-2.2 2.2a11.042 11.042 0 005.94 5.94l2.2-2.2a1 1 0 011.09-.217l5.36 1.664A1 1 0 0121 17.72V21a2 2 0 01-2 2h-1C9.716 23 1 14.284 1 3V2a2 2 0 012-2h0z"
                  />
                </svg>
                <span>(123) 456-7890</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dauphineezc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {/* GitHub (same as before) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 ... (rest of path) ..."/>
                </svg>
                <span>github.com/dauphineezc</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/zoedauphinee"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {/* LinkedIn (same as before) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 ... (rest of path) ..."/>
                </svg>
                <span>linkedin.com/in/zoedauphinee</span>
              </a>
            </li>
          </ul>
        )}

      </div>
    </div>
  )
}
