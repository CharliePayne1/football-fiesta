import React, { useState, useEffect } from 'react';
import './App.css';
import Teams from './components/Teams/Teams'
import Scores from './components/Scores/Scores'

const teamsFromAPI = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton and Hove Albion', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 'Norwich City', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham United'];
const teamsChosenFromAPI = ['Arsenal'];

function App() {
  const [premierTeams, setPremierTeams] = useState([]);
  const [pickedTeams, setPickedTeams] = useState([]);

  useEffect(() => {
    setPremierTeams(teamsFromAPI);
    setPickedTeams(teamsChosenFromAPI)
  });

  const pickTeam = (pos) => {
    premierTeams = premierTeams.filter(teams => teams[pos] !== pos)
  }
  
  return (
    <div className="App">
    <p className="title">
      <span>
        Last Man Standing
      </span>
    </p>
    <Teams teams={premierTeams} pickTeam={pickTeam}/>
    <Scores teams={pickedTeams}/>
    </div>
  );
}

export default App;
