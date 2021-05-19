import { useState } from 'react';

export default function Form(props) {
  const [userName, setUserName] = useState('User Name');
  const [password, setPassword] = useState('Password');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAuthentication(userName,password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
            <input 
              type="text" 
              value={userName}
              onChange={handleUserNameChange}  
              />
        </label>
        <label>
          Password:
            <input 
              type="password" 
              value={password}
              onChange={handlePasswordChange}
              />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <button onClick={() =>props.handleAuthentication(userName,password)}>Sumbit</button> */}
    </div>
  );
}