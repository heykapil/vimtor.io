function Link({ to, children, ...props }) {
  const target = to.includes(':') ? '_blank' : '_self'
  return (
    <a href={to} target={target} rel="noopener" {...props}>
      {children}
    </a>
  )
}

export default Link
