import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const responseMessage = (response) => {

    // Check if the response contains user information
    if (response) {

      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <h1>Welcome, User!</h1>
      ) : (
        <div>
          <h2>React Google Login</h2>
          <br />
          <br />
          <GoogleLogin onSuccess={responseMessage} />
        </div>
      )}
    </div>
  );
}

export default App;
