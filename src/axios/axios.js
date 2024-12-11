import React, { Component } from "react";

class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, products: [],color:"red" };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((a)=>{this.setState({products:a})})
  };
   static getDerivedStateFromProps(props,states){
    return{
        color:props.color
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <h1>{this.state.products.map((a,b)=>{
            return(
                <h1 style={{color:this.state.color}}>{a.title}</h1>
            )
                
            
        })}</h1>


        
      </div>
    );
  }
}
export default Axios;


