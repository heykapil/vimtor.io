import style from './profile-picture.css'

function ProfilePicture() {
  return (
    <img
      class={style.image}
      src="./assets/images/profile.webp"
      alt="victor navarro"
      width={200}
      height={200}
    />
  )
}

export default ProfilePicture
