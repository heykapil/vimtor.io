import style from './project-item.sass'
import Link from '../../link/link'

const ProjectItem = ({ title, description, source, banner }) => (
  <li class={style.container}>
    <div class={style.info}>
      <h3 class={style.title}>{title}</h3>
      {description.map((text) => (
        <p class={style.description}>{text}</p>
      ))}
      <Link class={style.link} to={source.link}>{source.text}</Link>
    </div>
    <div class={style.banner}>
      <Link to={source.link}>
        <img
          class={style.image}
          src={`/assets/images/${banner.src}.webp`}
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
