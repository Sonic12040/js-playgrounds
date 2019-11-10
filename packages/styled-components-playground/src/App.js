import React from 'react';
import styled from 'styled-components';
import './App.css';

const Button = styled.button`
  display: inline-block;
  background-color: #004d00;
  color: #ffffff;
  padding: 16px;
  border: 2px solid #ffffff;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 16px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background-color: #00695c;
    border: 2px solid #000000;
  }
  &:focus {
    background-color: #00695c;
    border: 2px solid #000000;
  }
  &:active {
    background-color: #004d00;
    border: 2px solid #000000;
  }
`;

function App() {
  return (
    <div className="App">
      <Button>Click Me!</Button>
    </div>
  );
}

export default App;
