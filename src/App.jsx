import { Component } from 'react'
import './App.css'
import Statistics from './components/Statistics/Statistics'
import Buttons from './components/Buttons/Buttons'

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

handleGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1
    }));
  }
  handleNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1
    }));
  }
  handleBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1
    }));
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    
    return (
    
      <>
      <h1>Please leave feedback</h1>
      <Buttons  good={this.handleGood} neutral={this.handleNeutral} bad={this.handleBad}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
      </>
    )
  }
}

export default App