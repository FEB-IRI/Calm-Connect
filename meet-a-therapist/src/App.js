import React from 'react';
import './App.css';

function MeetATherapist() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Meet a Therapist</h2>
        <ul>
          <li><a href="http://127.0.0.1:3000/dashboard.html"><img src="dashboard-icon.png" alt="Dashboard Icon" /> Dashboard</a></li><hr />
          <li><a href="http://127.0.0.1:3000/Community.html"><img src="community-icon.png" alt="Community Icon" /> Community</a></li><hr />
          <li><a href="#"><img src="therapist-icon.png" alt="Therapist Icon" /> Meet a Therapist</a></li><hr />
          <li><a href="http://127.0.0.1:3000/Chat with a therapist.html"><img src="chat-icon.png" alt="Chat Icon" /> Chat with a Therapist</a></li><hr />
          <li><a href="https://forms.gle/2J9XnW7ujA1T5Dtg7"><img src="wellness-test-icon.png" alt="Wellness Test Icon" /> Take a Wellness Test</a></li><hr />
          <li><a href="http://127.0.0.1:3002/Progress.html"><img src="progress-icon.png" alt="Progress Icon" /> Progress</a></li><hr />
          <li><a href="http://127.0.0.1:3000/Settings.html"><img src="settings-icon.png" alt="Settings Icon" /> Settings</a></li><hr />
        </ul>
      </div>
      <main className="content">
        <div className="calendar">
          <table>
            <thead>
              <tr>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
              <tr>
                <td>10</td>
                <td>11</td>
                <td className="selected">12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
              </tr>
              <tr>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
              </tr>
              <tr>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="time-selection">
          <input type="number" value="1" min="1" max="12" /> :
          <input type="number" value="00" min="0" max="59" />
          <select>
            <option>AM</option>
            <option selected>PM</option>
          </select>
          <button>Set</button>
        </div>
      </main>
      <div className="right-sidebar">
        <h2>Available Therapists on the 12th</h2>
        <ul>
          <li>Dr. Ralph</li>
          <li>Dr. Desmond Tetteh</li>
        </ul>
      </div>
    </div>
  );
}

export default MeetATherapist;

