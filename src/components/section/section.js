import style from './section.sass'

function Section({ title, subtitle, children }) {
  return (
    <section class={style.section}>
      <h2 class={style.title}>{title}</h2>
      <p class={style.subtitle}>{subtitle}</p>
      {children}
    </section>
  )
}

export default Section
