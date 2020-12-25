function Image({ src, alt, ...props }) {
  return (
    <picture>
      <source srcset={`./assets/images/${src}.avif`} type="image/avif"/>
      <source srcset={`./assets/images/${src}.webp`} type="image/webp"/>
      <img src={`./assets/images/${src}.jpg`} alt={alt} {...props}/>
    </picture>
  )
}

export default Image
