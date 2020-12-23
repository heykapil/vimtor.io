import Link from '../components/link'
import Footer from '../components/footer'
import projects from '../data/projects'

function HeroSection() {
  return (
    <section>
      <img src="/images/profile.webp" alt="victor navarro" loading="eager" width={200} height={200} />
      <div>
        <h1>Covandonga</h1>
        <div>
          <p>My name is Victor Navarro and I love sharing knowledge in a funny way</p>
          <p>This is my best attempt</p>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section>
      <h2>Experience 🚀</h2>
      <p>Some of the things I&apos;ve built</p>
      <ul>
        {projects.map(({ title, description, banner, source }) => (
          <li>
            <img src={`/images/${banner.src}.webp`} alt={banner.alt} loading="lazy" width={256} height={152} />
            <div>
              <h3>{title}</h3>
              {description.map(text => (
                <p>{text}</p>
              ))}
              <a href={source.link}>{source.text}</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ContactSection() {
  return (
    <section>
      <h2>Contact ☎</h2>
      <p>Get in touch! I don't bite...</p>
      <ul>
        <li>
          Working as a full-stack developer at <Link to="https://bloobirds.com/">Bloobirds</Link>
        </li>
        <li>
          Growing my own startup <Link to="https://github.com/pocket-studios/">Pocket Studios</Link>
        </li>
        <li>Doing freelance jobs from time to time</li>
        <li>Always learning</li>
      </ul>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
