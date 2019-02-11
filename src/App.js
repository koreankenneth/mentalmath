import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'

class App extends Component {

  state = {
    xyz: {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      z: Math.floor(Math.random() * 100)
    },
    score: {
      numQuestions: 0,
      numCorrect: 0
    }
  }

  checkAnswer = (p, a) => {
    const sum = this.state.xyz.x + this.state.xyz.y + this.state.xyz.z
    const result = sum===p
    
    this.setState((currentState) => ({
      xyz: {
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        z: Math.floor(Math.random() * 100)
      },
      score: {
        numQuestions: currentState.score.numQuestions + 1,
        numCorrect: result===a? currentState.score.numCorrect + 1 : currentState.score.numCorrect
      }
    }))

  }
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game 
          xyz={this.state.xyz} 
          score={this.state.score}
          onCheckAnswer={this.checkAnswer}
        />
      </div>
    );
  }
}

export default App;
