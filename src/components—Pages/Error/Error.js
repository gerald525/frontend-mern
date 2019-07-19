import React from 'react';

const ErrorScreen = ({ status, message }) => {
  return (
    <div className="error-page"> 
      <h1 className="error-message">Oops! You got an error! </h1>
      <h3>{status}</h3>
      <p>{message}</p>        
    </div>
  );
};

export default ErrorScreen;