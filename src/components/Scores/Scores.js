
const Scores = ({teams}) => (
  
  <div className="scores">
    Previous Predictions:

    <table>
      <tr>
        <th>Week</th>
        <th>Predicted Winner</th>
      </tr>
      {teams.map((team, index) =>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{team}</td>
      </tr>)}
    </table>
  </div>
);

export default Scores;
