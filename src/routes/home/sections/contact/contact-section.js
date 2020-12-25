import style from './contact-section.scss'
import Section from '../../../../components/section/section'
import Link from '../../../../components/link/link'

const ContactSection = () => (
  <Section title="Contact 📞" subtitle="Get in touch! I don't bite...">
    <ul class={style.list}>
      <li>
        Working as a full-stack developer at{' '}
        <Link to="https://bloobirds.com/">Bloobirds</Link>
      </li>
      <li>
        Growing my own startup{' '}
        <Link to="https://github.com/pocket-studios/">Pocket Studios</Link>
      </li>
      <li>Doing freelance jobs from time to time</li>
      <li>Always learning</li>
    </ul>
    <p>
      Feel free to contact me at{' '}
      <Link to="mailto:victor@vimtor.io">victor@vimtor.io</Link> or reach out
      on social media ☺
    </p>
  </Section>
)

export default ContactSection
