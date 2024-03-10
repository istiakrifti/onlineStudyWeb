import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const validPasswords = ['1234', 'asdf'];
  const handlePasswordSubmit = () => {
    
    const isValidPassword = validPasswords.includes(password);

    if (isValidPassword) {
      // Redirect to the new page
      props.setPassword(password);
      navigate(`/new-page/${password}`);
    }
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>Enter Password:</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handlePasswordSubmit}>Submit</button>
    </div>
  );
};

export default Home;
