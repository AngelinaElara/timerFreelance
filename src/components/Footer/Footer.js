const Footer = () => {
  const className = 'footer'

  return (
    <footer className={className}>
      <div className='container'>
        <a href='mailto:hello@teamer.net' className={`${className}__mail`}>hello@teamer.net</a>
      </div>
    </footer>
  )
}

export default Footer