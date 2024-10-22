import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><a href="/dashboard"><img src="dashboard-icon.png" alt="Dashboard Icon"/> Dashboard</a></li><hr/>
          <li><a href="/community"><img src="community-icon.png" alt="Community Icon"/> Community</a></li><hr/>
          <li><a href="/meet-a-therapist"><img src="therapist-icon.png" alt="Therapist Icon"/> Meet a Therapist</a></li><hr/>
          <li><a href="/chat-with-a-therapist"><img src="chat-icon.png" alt="Chat Icon"/> Chat with a Therapist</a></li><hr/>
          <li><a href="https://forms.gle/2J9XnW7ujA1T5Dtg7"><img src="wellness-test-icon.png" alt="Wellness Test Icon"/> Take a Wellness Test</a></li><hr/>
          <li><a href="/progress"><img src="progress-icon.png" alt="Progress Icon"/> Progress</a></li><hr/>
          <li><a href="/settings"><img src="settings-icon.png" alt="Settings Icon"/> Settings</a></li><hr/>
        </ul>
      </div>
      <div className="content">
        <div className="progress">
          <h3>50% Complete</h3>
          <div className="progress-circle">
            <span>50%</span>
          </div>
          <p>You are almost done with your Wellness test</p>
        </div>
        <div className="community">
          <h3>Community</h3>
          <p>New post by Abdullah in #ShareYourStory</p>
          <p>5 new posts in #DarkThoughtsBeGone</p>
          <p>You have 1 unread message from Dan Zoldyk</p>
        </div>
        <div className="reminder">
          <h3>Reminder</h3>
          <p>Your scheduled meeting with your therapist is in <strong>2 hours</strong></p>
        </div>
        <div className="motivation">
          <h3>Daily Motivation from: Dr. Asamoah</h3>
          <p>Don’t be afraid to seek help. Not seeking help is like walking down a never-ending dark tunnel. Seeking help is finding the light at the end of that tunnel</p>
        </div>
      </div>
    </div>
  );
}

export default App;

