import style from './project-gallery.sass'
import projects from './projects.json'
import Link from '../link/link'
import ProjectItem from './project-item/project-item'

const ProjectGallery = () => (
  <ul class={style.list}>
    {projects.map((props) => (
      <ProjectItem key={props.title} {...props} />
    ))}
  </ul>
)

export default ProjectGallery
