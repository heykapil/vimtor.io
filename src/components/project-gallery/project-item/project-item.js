import style from './project-item.sass'
import Link from '../../link/link'
import Image from '../../image/image'

const ProjectItem = ({ title, description, source, banner }) => (
  <li class={style.container}>
    <div>
      <h3 class={style.title}>{title}</h3>
      {description.map((text) => (
        <p class={style.description}>{text}</p>
      ))}
      <Link class={style.link} to={source.link}>{source.text}</Link>
    </div>
    <div class={style.banner}>
      <Link to={source.link}>
        <Image
          class={style.image}
          src={banner.src}
          alt={banner.alt}
          loading="lazy"
          decoding="async"
          width={256}
          height={152}
        />
      </Link>
    </div>
  </li>
)

export default ProjectItem
