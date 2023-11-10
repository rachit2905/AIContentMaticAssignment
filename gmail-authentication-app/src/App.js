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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {isAuthenticated ? (
        <h1>Welcome, User!</h1>
      ) : (
        <div>
          <GoogleLogin onSuccess={responseMessage} />
        </div>
      )}
    </div>
  );
}

export default App;
