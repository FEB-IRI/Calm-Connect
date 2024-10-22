import React from 'react';
import './App.css';

function SettingsPage() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Settings</h2>
        <ul>
          <li><a href="http://127.0.0.1:3000/dashboard.html"><img src="dashboard-icon.png" alt="Dashboard Icon"/> Dashboard</a></li><hr/>
          <li><a href="http://127.0.0.1:3000/Community.html"><img src="community-icon.png" alt="Community Icon"/> Community</a></li><hr/>
          <li><a href="http://127.0.0.1:3000/Meet a Therapist.html"><img src="therapist-icon.png" alt="Meet a Therapist Icon"/> Meet a Therapist</a></li><hr/>
          <li><a href="http://127.0.0.1:3000/Chat with a therapist.html"><img src="chat-icon.png" alt="Chat with a Therapist Icon"/> Chat with a Therapist</a></li><hr/>
          <li><a href="https://forms.gle/2J9XnW7ujA1T5Dtg7"><img src="wellness-test-icon.png" alt="Take a Wellness Test Icon"/> Take a Wellness Test</a></li><hr/>
          <li><a href="http://127.0.0.1:3000/Progress.html"><img src="progress-icon.png" alt="Progress Icon"/> Progress</a></li><hr/>
          <li><a href="http://127.0.0.1:3000/Settings.html"><img src="settings-icon.png" alt="Settings Icon"/> Settings</a></li><hr/>
        </ul>
      </div>
      <div className="main-content">
        <ul>
          <li>Profile<hr/></li>
          <li>Upgrade to Premium<hr/></li>
          <li>Security<hr/></li>
          <li>Logout<hr/></li>
        </ul>
      </div>
      <div className="profile-pic">
        <img src="profile-picture.jpg" alt="Profile Picture"/>
      </div>
    </div>
  );
}

export default SettingsPage;

