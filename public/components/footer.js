import 'https://unpkg.com/boxicons@latest/dist/boxicons.js'
import Link from './link'
import socialMedia from '../data/social-media'

function Footer() {
  return (
    <footer>
      <ul>
        {socialMedia.map(({ name, link }) => (
          <li>
            <Link to={link} aria-label={name}>
              <box-icon type="logo" name={name} />
            </Link>
          </li>
        ))}
      </ul>
      <p>Victor Navarro &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
