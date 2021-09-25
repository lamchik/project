// import button from '../../images/btn2.png'
import './Main.css';
import "../../fonts/dinPro/dinpro.css"
import '../../fonts/gilroy/gilroy.pcss'
import arrow from '../../images/arrow.png'

function Main() {
  return (
    <div className='main'>
      <p className='main__hello'>привет,</p>
      <div className='main__task-wrapper'>
        <div className='main__task-wrap-text'>
          <p className='main__task-text'>это</p>
          <p className='main__task-text main__task-text_bold'>не</p>
        </div>
        <p className='main__task-text'>коммерческое</p>
        <div className='main__task-button-wrap'>
          <p className='main__task-text'>задание</p>
          <button className='main__button'>
            <div className='main__button-wrap'>
              <div className='main__button-circle'>
                <img className='main__button-arrow' src={arrow} alt='arrow'/>
              </div>
              <p className='main__button-text'>Что дальше?</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main