import emptyPhoto from '../../../ui/emptyPhoto.png'

const ProfileIcon = ({
  className, 
  img,
  onAvatarBtnClick
}) => {
  return (
    <button onClick={onAvatarBtnClick}>
      <img 
        className={`${className}__img`}
        src={img ? img : emptyPhoto} 
        alt='avatar'
      />
    </button> 
  )
}

export default ProfileIcon