import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    // Set up an interval to update the time
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);

    // Add event listener for window resize
    window.addEventListener("resize", this.handleResize);

    console.log("Component mounted");
  }

  componentWillUnmount() {
    // Clear the interval timer
    clearInterval(this.timerID);

    // Remove the event listener
    window.removeEventListener("resize", this.handleResize);

    console.log("Component will unmount");
  }

  handleResize = () => {
    // Update the window width in state
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const { time, windowWidth } = this.state;

    return (
      <div>
        <h1>Hello, World!</h1>
        <p>Current time: {time}</p>
        <p>Window width: {windowWidth}px</p>
      </div>
    );
  }
}

export default MyComponent;
