import style from './profile-picture.css'
import Image from '../image/image'

function ProfilePicture() {
  return (
    <Image
      class={style.image}
      src="profile"
      alt="victor navarro"
      width={200}
      height={200}
    />
  )
}

export default ProfilePicture
