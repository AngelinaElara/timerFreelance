import {ReactComponent as Phone} from '../../../../ui/phone.svg'

const Image = ({
  className
}) => {
  return (
    <div className={`${className}__img`}>
      <Phone />
    </div>
  )
}

export default Image