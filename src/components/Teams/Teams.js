const Teams = ({teams, pickTeam, setChosenTeam}) => (

  <div className="teams">
    <div>
      Pick your winning team:
      <select className="pick-your-team" onChange={(e) => setChosenTeam(e.target.value)}>
        {teams.map((team, index) => 
        <option key={index} value={team}>{team}</option>)}
      </select>
      <button onClick={(pickTeam)} className="choose">
        Choose
      </button>
    </div>
  </div>
);

export default Teams;
