import React, { useState, useEffect } from 'react';
import './App.css';
import Teams from './components/Teams/Teams'
import Scores from './components/Scores/Scores'

const teamsFromAPI = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton and Hove Albion', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 'Norwich City', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham United'];
const teamsChosenFromAPI = [];

function App() {
  let [premierTeams, setPremierTeams] = useState([]);
  let [pickedTeams, setPickedTeams] = useState([]);
  let [chosenTeam, setChosenTeam] = useState('');
  
  useEffect(() => {
    setPremierTeams(teamsFromAPI);
    setPickedTeams(teamsChosenFromAPI);
    setChosenTeam(teamsFromAPI[0])
  }, []);
  
  const pickTeam = () => {
    // find the index of the chosen team
    let index = premierTeams.indexOf(chosenTeam);
    // filter out the chosen team from teams that the user can chose
    setPremierTeams(premierTeams.filter(team => chosenTeam !== team));
    // add the chosen team to the list of teams chosen
    pickedTeams.push(chosenTeam);
    // reset the chosen team to the next team and this team will be removed from the dropdown
    setChosenTeam(premierTeams[index + 1])
  }
  
  return (
    <div className="App">
    <p className="title">
      <span>
        Last Man Standing
      </span>
    </p>
    <Teams teams={premierTeams} pickTeam={pickTeam} setChosenTeam={setChosenTeam}/>
    <Scores teams={pickedTeams}/>
    </div>
  );
}

export default App;
