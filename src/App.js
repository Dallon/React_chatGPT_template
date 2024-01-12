import "./index.css";
import {useState} from "react";
const App = () => {
  const [inputMessage, setInputMessage] = useState(" ");
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: inputMessage
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      // Fetch data from the server
      const response = await fetch('http://localhost:8000/v1/chat/completions', options);

  
      // Ensure the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      // Convert the response to JSON
      const data = await response.json();
      console.log(data);
        
    } catch (error) {
      console.error('Fetch error:', error);
    }
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
            <div id="submit" onClick={getMessages}>[send]</div>
          </div>
          <p className="info">
            Chat GPT Mar 14 Version. BLAGHAFDSjga Lorem Ipsum
          </p>
        </div>
      </section>
    </div>
  );
};

export default App