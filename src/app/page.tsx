import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeClosedIcon, FileTextIcon } from '@radix-ui/react-icons'

export default function HomePage() {
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
        <h1 className="home-title">Zoë Dauphinee</h1>
        <p className="home-subtitle">Full Stack Software Engineer</p>
      </div>

      <div className="home-about">
        <h2>About Me</h2>
        <p>
          I&apos;m a Computer Science student at NYU with a passion for building innovative solutions 
          that make a real difference. With experience in full-stack development, AI/ML, and user 
          experience design, I love tackling complex problems and creating seamless digital experiences.
        </p>
        <p>
          Currently working as a Full Stack Software Developer at Greater Midland, where I&apos;ve built 
          systems that serve over 400 local athletes and 300,000+ community members. I&apos;m also the 
          winner of the On-Device AI Builders Hackathon, where my team developed an innovative legal 
          document analyzer using localized AI.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
          projects, or working on creative side projects that combine my technical skills with my 
          love for design and user experience.
        </p>
      </div>

      <div className="home-cta">
        <Link href="/resume" className="cta-button primary">
          <FileTextIcon />
          View My Resume
        </Link>
        <Link href="/contact" className="cta-button">
          <EnvelopeClosedIcon />
          Get In Touch
        </Link>
      </div>
    </div>
  )
}