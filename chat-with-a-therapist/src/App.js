import React from 'react';
import './App.css';

function ChatWithTherapist() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Chat with a Therapist</h2>
        <div className="therapist">
          <img src="therapist1.jpg" alt="Dr. Daniel Asamoah" />
          <span>Dr. Daniel Asamoah<hr/></span>
        </div>
        <div className="therapist">
          <img src="therapist2.jpg" alt="Dr. Desmond Tetteh" />
          <span>Dr. Desmond Tetteh<hr/></span>
        </div>
        <div className="therapist">
          <img src="therapist3.jpg" alt="Dr. Thomas Thompkins" />
          <span>Dr. Thomas Thompkins</span>
        </div>
        <button style={{ padding: "10px 20px", backgroundColor: "#f2a2a8", border: "none", borderRadius: "20px", color: "white", cursor: "pointer" }}>
          <a href="http://127.0.0.1:3000/dashboard.html" style={{ textDecoration: "none", color: "white" }}>Go Back</a>
        </button>
      </div>
      <div className="chat">
        <div className="messages">
          <div className="message sent">Hello Dr. Tetteh</div>
          <div className="message">Hello, you must be my new patient.</div>
          <div className="message">How're you doing?</div>
        </div>
        <div className="input-area">
          <input type="text" placeholder="Type your message here..." />
          <button><img src="mdi--microphone.svg" alt="Microphone" /></button>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWithTherapist;

