import MainHeader from "../MainHeader/MainHeader";
import './App.css';
import bact_4 from '../../images/bact_4.png'
import bact_5 from '../../images/bact_5.png'
import bact_2 from '../../images/bact_2.png'
import bact_7 from '../../images/bact_7.png'
import sperm from '../../images/pink_sperm_big.png'
import bact_6 from '../../images/bact_6.png'
import bact_1 from '../../images/bakti_1.png'
import bact_3 from '../../images/bact_3.png'







import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className='app__container'>
        <img className='app__bact-4' src={bact_4} alt='bacteria'/>
        <img className='app__bact-5' src={bact_5} alt='bacteria'/>
        <img className='app__bact-2' src={bact_2} alt='bacteria'/>
        <img className='app__bact-7' src={bact_7} alt='bacteria'/>
        <img className='app__bact-6' src={bact_6} alt='bacteria'/>
        <img className='app__bact-1' src={bact_1} alt='bacteria'/>
        <img className='app__bact-3' src={bact_3} alt='bacteria'/>

        <img className='app__sperm' src={sperm} alt='sperm'/>
        <MainHeader/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
