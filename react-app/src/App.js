import Logo from './Logo.svg';
import './App.css';
import NavButton from './components/NavButton';
import AddButton from './components/AddButton';

function App() {
  return (
    <div className="App">
      <div>
        <img src="https://images.squarespace-cdn.com/content/53bf2a9be4b05a05f0bd263c/1484560744718-DP3TUIH6L91H0AONXPRG/Screen+Shot+2017-01-16+at+4.58.38+AM.png?format=1000w&content-type=image%2Fpng"
          alt="Spectator Publishing Company Logo" width='20%' height='20%'></img>
        <h1 className="heading">Spectator's Sources</h1>
        
        <NavButton>
          <AddButton></AddButton>
        </NavButton>
        
      </div>
      

      <div className="list-item">
        <p className="list-maintext">
          1
        </p>
        <p className="list-maintext">
          Presbo
        </p>
        <p className="list-subtext">
          presbo@columbia.edu
        </p>
        <button className="button-red">DELETE</button>
      </div>
      <div className="list-item">
        <p className="list-maintext">
          2
        </p>
        <p className="list-maintext">
          John Jay Mouse
        </p>
        <p className="list-subtext">
          mouse@columbia.edu
        </p>
        <button className="button-red">DELETE</button>
      </div>
      <div className="list-item">
        <p className="list-maintext">
          1
        </p>
        <p className="list-maintext">
          Water Bottle Man
        </p>
        <p className="list-subtext">
          flipper@columbia.edu
        </p>
        <button className="button-red">DELETE</button>
      </div>
    </div>
  );
}

export default App;
