import "./index.css";
import Amplify from 'aws-amplify';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './store/slices/chatSlice.js'; // Adjust the path as necessary

const App = () => {
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const loading = useSelector((state) => state.chat.loading);
  const error = useSelector((state) => state.chat.error);
  const messagesEndRef = useRef(null);

  // Scroll to the bottom every time messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessage = () => {
    dispatch(sendMessage(inputMessage));
    setInputMessage(""); // Reset the input field after dispatch
  };

  return (
    <div className="app">
      <section className="side-bar">
        {/* Sidebar content unchanged */}
      </section>
      <section className="main">
        <h1>DallonGPT</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">Error: {error}</p>
        ) : (
          <ul className="feed">
            {messages.map((message, index) => (
              <li key={index}>{message}</li> // Display messages
            ))}
            <div ref={messagesEndRef} />
          </ul>
        )}
        <div className="bottom-section">
          <div className="input-container">
            <input 
              value={inputMessage} 
              onChange={(e) => setInputMessage(e.target.value)} 
              placeholder="Type your message here..."
            />
            <div id="submit" onClick={handleMessage}>[send]</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
