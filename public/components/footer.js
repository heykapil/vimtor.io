import Link from './link'
import socialMedia from '../data/social-media'
import Icon from './icon'

function Footer() {
  return (
    <footer>
      <ul>
        {socialMedia.map(({ name, link }) => (
          <li>
            <Link to={link} aria-label={name}>
              <Icon name={name} />
            </Link>
          </li>
        ))}
      </ul>
      <p>Victor Navarro &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
