import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { text: "" }; // Initialize with an empty string instead of this.formSubmission
  }

  formSubmission = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.id1.value }); // Access `id1` input's value correctly
  };

  render() {
    return (
      <>
        <form onSubmit={this.formSubmission}>
          <input id="id1" type="text" />
          <input type="submit" />
        </form>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default Form;
