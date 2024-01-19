import "./index.css";
import {useState} from "react";
import Amplify from 'aws-amplify';
import { getMessage } from './utils.js';


const App = () => {
  const [inputMessage, setInputMessage] = useState(" ");
 
  
  const handleMessage = () => {
    getMessage(inputMessage, setInputMessage);
  }
  
  return (
    <div className="app">
      <section className="side-bar">
        <button> + New chat</button>
        <ul className="history">
          <li>BLECH</li>
        </ul>
        <nav>
          <p>Made by Dallon</p>
        </nav>
      </section>
      <section className="main">
        <h1> DallonGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={inputMessage} onChange={(e)=> setInputMessage(e.target.value)} />
            <div id="submit" onClick={handleMessage}>[send]</div>
          </div>
          <p className="info">

          </p>
        </div>
      </section>
    </div>
  );
};

export default App