
const Scores = (props: any) => (
  <div>
    Previous Predictions:
    {props.teams.map((team: string, index: number) => 
      <p key={index}>{index + 1}. {team}</p>)}
  </div>
);

export default Scores;
