import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      counter: 0,
      error: ""
    }
  }
  render(){
  return (
  <div data-test="component-app">
    <h1 data-test="counter-display">The counter counts {this.state.counter}</h1>
    <button 
    data-test="increment-button"
    onClick={()=>this.setState({counter: this.state.counter +1, error: ""})}
    >
      Increment Counter
      </button>

      <button
      data-test="decrement-button"
      onClick={()=>this.state.counter >0 ?
       this.setState({counter: this.state.counter -1}):
       this.setState({error:"you can't count below 0"})}>
        Decrement Counter
      </button>
      <h2 data-test="error-display">{this.state.error}</h2>

  </div>
  );
}}

export default App;
