import './ScoreCard.css';

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
    <div className='scorecard-container'>
      <h3>Player {props.player} Score: <span>{props.playerScore}</span></h3>
      <div className='button-container'>
        <button 
          className='score-button increment'
          onClick={incrementScore} 
          disabled={props.buttonsInactive}>
          Increment Score
        </button>
        <button 
          className='score-button decrement'
          onClick={decrementScore} 
          disabled={props.buttonsInactive}>
          Decrement Score
          </button>
        <button 
          className='score-button reset'
          onClick={resetScore}>
          Reset Score
        </button>
      </div>
    </div>
  );
}