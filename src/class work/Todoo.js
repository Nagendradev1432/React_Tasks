import React, { Component } from "react";

class Todo extends Component {

  constructor(){
    super()
    this.state={Todo:"",list:[]}
  }

  handler=((e)=>{
    e.preventDefault()
    const value=e.target.value
    this.setState({Todo:value})
    
  })

handsubmit=((e)=>{
    e.preventDefault();
    this.setState((a)=>{
      return{
        list:[...a.list,a.Todo],
        Todo:""
      }
    })
})
  render() {
    return (
      <>
        <form onSubmit={this.handsubmit}>
          <input type="text" name="Todo" value={this.state.Todo}  onChange={this.handler}/>
          <input type="submit"/>
        </form>
        <h1>{this.state.list.map((a,b)=>{
          return(
          <ul>
            <li>{a}<button>Delete</button><button>Update</button></li>
          </ul>
        )})}</h1>
      </>
    );
  }
}

export default Todo;
