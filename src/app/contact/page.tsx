import Image from 'next/image'
import {
  EnvelopeClosedIcon,
  MobileIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

export default function ContactPage() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <Image
          src="/profile.JPG"
          alt="Zoë Dauphinee"
          width={180}
          height={180}
          className="home-profile-image"
        />
        <h1 className="home-title">Get In Touch</h1>
        <p className="home-subtitle">Let&apos;s connect and create something amazing together</p>
      </div>

      <div className="home-about">
        <h2>Contact Information</h2>
        <p>
          I&apos;m always interested in new learning opportunities, collaborations, and interesting projects. 
          Whether you&apos;re looking for a software engineer, have a project idea, or just want to chat 
          about shared interests, don't hesitate to get in touch!
        </p>
      </div>

      {/* Contact as 2-column square cards */}
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
    </div>
  )
}
