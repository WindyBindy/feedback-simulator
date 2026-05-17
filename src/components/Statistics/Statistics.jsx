import { Component } from "react";


class Statistics extends Component{
render(){
  const {good, neutral, bad} = this.props
  const total = good + neutral + bad
  const percantage = total > 0 ? Math.round((good / total) * 100) : 0;
  return (
    <div>
    <h2>Statistics</h2>
      {total == 0 && 
      <p>No feedback given</p>
      }
      {total !== 0 && 
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total:{total} </li>
        <li>Positive feedback: {percantage}%</li>
      </ul>
      }
    </div>
  )
}
}

export default Statistics