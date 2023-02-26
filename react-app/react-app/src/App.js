import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
      <div>
        <img src="https://images.squarespace-cdn.com/content/53bf2a9be4b05a05f0bd263c/1484560744718-DP3TUIH6L91H0AONXPRG/Screen+Shot+2017-01-16+at+4.58.38+AM.png?format=1000w&content-type=image%2Fpng">
          alt="Spectator Publishing Company Logo" width='20%' height='20%'</img>
        <h1 class="heading">Spectator's Sources</h1>

        <div class="nav">
          <p class="nav-text">
            <h5>Source Name:</h5>
          </p>
          <div class="whitebox"><input type='text'></input></div>
          <p class="nav-text">
            <h5>Source Email:</h5>
          </p>
          <div class="whitebox"><input type="text">TYPE</input></div>
          <button class="button-green">ADD</button>
        </div>
      </div>
abd

      <div class="list-item">
        <p class="list-maintext">
          1
        </p>
        <p class="list-maintext">
          Presbo
        </p>
        <p class="list-subtext">
          presbo@columbia.edu
        </p>
        <button class="button-red">DELETE</button>
      </div>
      <div class="list-item">
        <p class="list-maintext">
          2
        </p>
        <p class="list-maintext">
          John Jay Mouse
        </p>
        <p class="list-subtext">
          mouse@columbia.edu
        </p>
        <button class="button-red">DELETE</button>
      </div>
      <div class="list-item">
        <p class="list-maintext">
          1
        </p>
        <p class="list-maintext">
          Water Bottle Man
        </p>
        <p class="list-subtext">
          flipper@columbia.edu
        </p>
        <button class="button-red">DELETE</button>
      </div>
    </div>
  );
}

export default App;
