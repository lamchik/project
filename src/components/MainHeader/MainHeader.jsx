import './MainHeader.css';
import home from '../../images/home.svg'
import line from '../../images/line.svg'

function MainHeader() {
  return (
    <div className='header'>
      <img className='header__icon-home' alt='home' src={home}/>
      <img className='header__icon-line' alt='line' src={line}/>
      <p className='header__text'>project</p>
    </div>

  )
}

export default MainHeader