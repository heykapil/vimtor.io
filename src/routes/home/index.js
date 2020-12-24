import Footer from '../../components/footer/footer'
import HeroSection from './sections/hero/hero-section'
import ExperienceSection from './sections/experience/experience-section'
import ContactSection from './sections/contact/contact-section'


export default function Index() {
  return (
    <main>
      <HeroSection/>
      <ExperienceSection/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}
