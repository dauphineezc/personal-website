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
          Hello! I&apos;m a Software Engineer with a passion for building innovative solutions that make a real impact. 
          Currently a Full Stack Developer at Greater Midland, I&apos;m happy to be building systems that 
          serve thousands of community members in my hometown. With experience in full-stack development, AI/ML, and user 
          experience design, I love tackling complex problems and creating seamless digital experiences.
        </p>
        <p>
          I recently graduated from New York University with a B.S. in Computer Science. One of my proudest achievements from my
          time at NYU was winning the Qualcomm + Microsoft On-Device AI Builders Hackathon, where my team developed an innovative 
          localized AI-powered contract analyzer to help make complex legal documents more accessible. While I love any sort of tech 
          development, I&apos;m particularly passionate about any project that uses technology to make the world a more accessible 
          and equitable place.
        </p>
        <p>
          During my time at NYU, I was a proud member of the Taekwondo team. Since graduating, I&apos;ve switched over to boxing; I enjoy 
          being active and learning new skills! When I&apos;m not coding or in the gym, I enjoy unwinding with a good book and my dog 
          by my side. Feel free to reach out if you&apos;d like to chat about tech, projects, or just to say hi - I am always eager to 
          learn, grow, and collaborate!
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