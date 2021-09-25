import MainHeader from "../MainHeader/MainHeader";
import './App.css';
import Main from "../Main/Main";

function App() {
  return (
    <div className="app">
      <div className='app__container'>
        <MainHeader/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
