export default function ScoreCard(props) {
  const incrementScore = () => {
    props.setPlayerScore(props.playerScore + props.questionVal); 
  }
  const decrementScore = () => {
    props.setPlayerScore(props.playerScore - props.questionVal);
  }
  const resetScore = () => {
    props.setPlayerScore(0);
  }
  return (
    <div>
      <h3>Player {props.player} Score: {props.playerScore}</h3>
      <button onClick={incrementScore} disabled={props.buttonsInactive}>Increment Score</button>
      <button onClick={decrementScore} disabled={props.buttonsInactive}>Decrement Score</button>
      <button onClick={resetScore}>Reset Score</button>
    </div>
  );
}