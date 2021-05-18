import { useState } from 'react';

import Form from './components/Form.js';
import Success from './components/Success.js';
import Failure from './components/Failure.js';


import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userName = 'Carlos';
  const password = 'skateOrCode'

  const handleAuthentication = (e, user, pw) => {
    e.preventDefault();
    setIsLoading(true);
    if (userName === user && password === pw) {
      setIsAuthenticated(true);
      console.log('here');
    } else {
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      <Form handleAuthentication={handleAuthentication}/>
      {
        isAuthenticated &&
        <Success />
      }
      {
        !isAuthenticated &&
        isLoading &&
        <Failure />
      }
    </div>
  );
}

export default App;
