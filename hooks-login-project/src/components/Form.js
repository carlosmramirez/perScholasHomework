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

  console.log(userName,password)
  return (
    <div>
      <form onSubmit={(e) => props.handleAuthentication(e,userName,password)}>
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
              type="text" 
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