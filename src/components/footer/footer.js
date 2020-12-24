import style from './footer.css'
import Link from '../link/link'
import Icon from '../icon'

const socialMedia = [
  {
    link: 'https://github.com/vimtor',
    name: 'github',
  },
  {
    link: 'https://linkedin.com/in/victor-navarro-gonz/',
    name: 'linkedin',
  },
  {
    link: 'https://twitter.com/vimtor_',
    name: 'twitter',
  },
  {
    link: 'https://twitch.tv/vimtor_',
    name: 'twitch',
  },
]

function Footer() {
  return (
    <footer class={style.footer}>
      <ul>
        {socialMedia.map(({ name, link }) => (
          <li>
            <Link to={link} aria-label={name}>
              <Icon name={name}/>
            </Link>
          </li>
        ))}
      </ul>
      <p>Victor Navarro &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
