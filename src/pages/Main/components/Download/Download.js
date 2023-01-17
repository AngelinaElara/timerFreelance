const Download = ({
  className
}) => {
  return (
    <div className={`${className}__download`}>
      <div>
        <h1 className={`${className}__title`}>Найди команду <span>на проектный практикум</span></h1>
        <p className={`${className}__text`}>С тимером сделать это еще проще</p>
      </div>
      <div>
        <button className={`${className}__btn`}>Скачать приложение</button>
      </div>
    </div>
  )
}

export default Download