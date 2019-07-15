import React from 'react';

const ErrorScreen = ({ status, message }) => {
  return (
    <div className="error-screen">
      <h1 className="error-title">Oops! You got an error! </h1>
      <h3>{status}</h3>
      <p>{message}</p>        
    </div>
  );
};

export default ErrorScreen;