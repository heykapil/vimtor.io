import 'https://unpkg.com/boxicons@latest/dist/boxicons.js'

function Icon({ name, ...props }) {
  return <box-icon type="logo" name={name} {...props} />
}

export default Icon
