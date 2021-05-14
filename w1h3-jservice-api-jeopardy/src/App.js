import { useState } from 'react';
import './App.css';
import ScoreCard from './components/ScoreCard/ScoreCard';

function App() {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [apiResponse, setApiResponse] = useState("");
  const [isQuestion, setIsQuestion] = useState(true);

  const getQuestion = () => {
    fetch('http://jservice.io/api/random')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Request Failed!'); 
      })
      .catch(error => alert(error.message))
      .then(jsonRes => {
        setApiResponse(jsonRes[0]);
      })
  }

  const toggleQuestionAnswer = () => {
    setIsQuestion(!isQuestion);
  }

  
  console.log(!!apiResponse)
  return (
    <div className="App">
      <h1 className='title'>Welcome to Jeopardy!</h1>
      <ScoreCard 
        player='1' 
        playerScore={playerOneScore}
        questionVal={apiResponse.value}
        buttonsInactive={!apiResponse}
        setPlayerScore={setPlayerOneScore}
      />
      <ScoreCard 
        player='2' 
        playerScore={playerTwoScore}
        questionVal={apiResponse.value}
        buttonsInactive={!apiResponse}
        setPlayerScore={setPlayerTwoScore}
      />
      <h3>Lets Play!</h3>
      <button onClick={getQuestion}>Get Question</button>
      <h4>Category: 
        {
          apiResponse 
          ? apiResponse.category.title
          : null
        }
      </h4>
      <h4>Points: {apiResponse.value}</h4>
      {
        isQuestion ?
        <h4>Question: {apiResponse.question}</h4>
        :
        <h4>Answer: {apiResponse.answer}</h4>
      } 
      <button onClick={toggleQuestionAnswer}>
        {
          isQuestion 
          ? 'Show Answer'
          : 'Show Question'
        }
      </button>

      
    </div>
  );
}

export default App;
