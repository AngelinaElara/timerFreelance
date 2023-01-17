import Header from '../../components/Header'
import Download from './components/Download/Download'
import Image from './components/Image/Image'

const Main = () => {
  const className = 'main'
  
  return (
    <>
      <Header page='main'/>
      <section className={className}>
        <Download className={className}/>
        <Image className={className}/>
      </section>
    </>
  )
}

export default Main