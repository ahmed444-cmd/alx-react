import React from 'react';
import './App.css'; // Ensure you have some styles for these classes

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <div className="App-header">
        <img src="./holberton-logo.png" alt="ALX Logo" />
        <h1>School dashboard</h1>
      </div>

      {/* Body Section */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      {/* Footer Section */}
      <div className="App-footer">
        <p>Copyright 2020 - ALX</p>
      </div>
    </div>
  );
}

export default App;
