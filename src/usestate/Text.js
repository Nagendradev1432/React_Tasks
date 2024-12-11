import React, { Component } from "react";
import "./text.css"

class Text extends Component {
  constructor() {
    super();
    this.state = { isOn: true };
  }

  handler = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  render() {
    return (
      <>
        <button onClick={this.handler} className={this.state.isOn?"switchon":"switchoff"}>
          {this.state.isOn ? <h1>switch off</h1> : <h1>switch on</h1>}
        </button>
       <h1 className={this.state.isOn?"Texton":"Textoff"}>{this.state.isOn ? <h1>Turned On</h1> : <h1>Turned Off</h1>}</h1>
      </>
    );
  }
}

export default Text;
