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
          I&apos;m always interested in new opportunities, collaborations, and interesting projects. 
          Whether you&apos;re looking for a software engineer, have a project idea, or just want to chat 
          about technology, feel free to reach out!
        </p>
        <p>
          I typically respond to emails within 24 hours and am available for calls or video chats 
          by appointment. Let&apos;s discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      {/* Contact as 2-column square cards */}
      <div className="contact-cards">
        <a href="mailto:zoe.dauphinee@gmail.com" className="contact-card">
          <EnvelopeClosedIcon className="card-icon" />
          <h3>Email</h3>
          <p>zoe.dauphinee@gmail.com</p>
        </a>
        <a href="tel:9894889848" className="contact-card">
          <MobileIcon className="card-icon" />
          <h3>Phone</h3>
          <p>(989) 488-9848</p>
        </a>
        <a
          href="https://github.com/dauphineezc"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <GitHubLogoIcon className="card-icon" />
          <h3>GitHub</h3>
          <p>@dauphineezc</p>
        </a>
        <a
          href="https://linkedin.com/in/zoedauphinee"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <LinkedInLogoIcon className="card-icon" />
          <h3>LinkedIn</h3>
          <p>@zoedauphinee</p>
        </a>
      </div>
    </div>
  )
}
