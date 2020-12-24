import ProfilePicture from '../../../../components/profile-picture/profile-picture'
import style from './hero-section.sass'

const HeroSection = () => (
  <section class={style.hero}>
    <ProfilePicture/>
    <div class={style.info}>
      <h1 class={style.title}>Covandonga 🤙</h1>
      <p>When I was a child, I dreamed of becoming an inventor.</p>
      <p>This is my best attempt</p>
    </div>
  </section>
)

export default HeroSection
