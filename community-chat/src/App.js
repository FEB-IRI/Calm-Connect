import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Community</h2>
        <ul>
          <li>Dan Zoldyk<hr/></li>
          <li>#ShareYourStory<hr/></li>
          <li>John Doe<hr/></li>
          <li>#DarkThoughtsBeGone<hr/></li>
        </ul>
        <button><a href="http://127.0.0.1:3000/dashboard.html">Go Back</a></button>
      </div>
      <div className="chat-area">
        <div className="message">
          <h3>Marcel Simmons</h3>
          <p>I had lost all hope in life. I was ready to commit suicide. I thought no one loved me. I was ready to end it all. Then I heard about this web app and eventually spoke to a therapist. I must say, I’ve never felt this good in my life.</p>
        </div>
        <div className="message">
          <h3>Ralph Mensah</h3>
          <p>I’ve found myself staring down the ledge of almost every tall building I’ve had access to. I’m glad I never jumped. I now have a wife and 2 beautiful kids I love to shreds, and it’s all thanks to the therapy and guidance I’ve received from this app.</p>
        </div>
        <div className="message">
          <h3>Gon Frecks</h3>
          <p>After reading the amazing stories here, I believe I’ll get better and also share my story with everyone.</p>
        </div>
        <div className="message">
          <h3>Abdullah Mohammed</h3>
          <p>All praise to Allah for bringing this app into my life. I’ve finally escaped the prison I used to call my life.</p>
        </div>
        <div className="input-area">
          <input type="text" placeholder="Type your message here..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;

