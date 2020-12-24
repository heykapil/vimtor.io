import style from './link.sass'

const Link = ({ to, children, ...props }) => {
  const target = to.includes(':') ? '_blank' : '_self'
  return (
    <a {...props} href={to} target={target} rel="noopener" class={`${style.link} ${props.class}`}>
      {children}
    </a>
  )
}

export default Link
