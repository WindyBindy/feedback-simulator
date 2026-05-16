import { Component } from "react";


class Buttons extends Component{
render(){
  const {good, neutral, bad} = this.props
  
  return (
    <div>
    <button type='button' onClick={good}>good</button>
    <button type='button' onClick={neutral}>neutral</button>
    <button type='button' onClick={bad}>bad</button>
    </div>
  )
}
}

export default Buttons