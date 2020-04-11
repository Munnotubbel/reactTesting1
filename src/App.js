import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const buttonStyle={backgroundColor:"white", fontSize:"20px",padding:"10px", marginLeft:"10px", marginRight:"10px", borderRadius: "10px"}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: "",
    };
  }
  render() {
    return (
      <div data-test="component-app">
        
        <div style={{ display: "flex", flexDirection: "column", alignItems:"center", marginTop:"5%" }}>
          <div>
            <h1 data-test="counter-display" style={{fontSize:"100px"}}>{this.state.counter}</h1>
          </div>
          <div>
          <button
          style={buttonStyle}
            data-test="increment-button"
            onClick={() =>
              this.setState({ counter: this.state.counter + 1, error: "" })
            }
          >
            Increment Counter
          </button>

          <button style={buttonStyle}
            data-test="decrement-button"
            onClick={() =>
              this.state.counter > 0
                ? this.setState({ counter: this.state.counter - 1 })
                : this.setState({ error: "you can't count below 0" })
            }
          >
            Decrement Counter
          </button>
          </div>
          <div>
          <h2 data-test="error-display">{this.state.error}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
