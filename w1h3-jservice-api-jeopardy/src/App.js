import { useState } from 'react';
import './App.css';
import ScoreCard from './components/ScoreCard/ScoreCard';

function App() {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [apiResponse, setApiResponse] = useState("");
  const [isQuestion, setIsQuestion] = useState(true);

  const getQuestion = () => {
    setIsQuestion(true);
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
      }
    );
  }

  const toggleQuestionAnswer = () => {
    setIsQuestion(!isQuestion);
  }

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
      <button id='get-question' onClick={getQuestion}>Get Question</button>
      <h4>Category: <span>
          {
            apiResponse 
            ? apiResponse.category.title
            : null
          }
        </span>
      </h4>
      <h4>Points: <span>{apiResponse.value}</span></h4>
      {
        isQuestion ?
        <h4>Question: <span>{apiResponse.question}</span></h4>
        :
        <h4>Answer: <span>{apiResponse.answer}</span></h4>
      } 
      <button id='toggle-question' onClick={toggleQuestionAnswer}>
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
