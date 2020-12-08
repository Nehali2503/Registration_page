/*import logo from './logo.svg';
 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React , { Component } from 'react';
import './App.css';
import {Card} from 'react-bootstrap';
import RegForm from './Components/Form';

class App extends Component {
  render() {
    return (
      <div className="styleapp"> 
      <Card> <Card.Title>
      <p><h1>Welcome to the Registration Page!</h1></p>
      </Card.Title></Card>
    
    <RegForm/>
    
    </div>
    );
          }
        }
  

    export default App;
