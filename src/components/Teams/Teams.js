const logTeam = (e) => {
  console.log(e)
  console.log(e.target.value)
}

const Teams = (props) => (

  <div className="teams">
    <div>
      Pick your winning team:
      <select className="pick-your-team">
        {props.teams.map((team, index) => 
        <option key={index} value={team}>{team}</option>)}
      </select>
      <button onClick={(e) => logTeam(e)} className="choose">
        Choose
      </button>
    </div>
  </div>
);

export default Teams;
