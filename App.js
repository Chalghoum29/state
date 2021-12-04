import React, { Component } from 'react'
import Todolist from './components/Todolist';
import "./App.css"
import AddTask from './components/AddTask';
export default class App extends Component {
  state={
    todos :[
      {id:Math.random(),action:"learn HTML",isDone: true},
      {id:Math.random(),action:"learn Redux",isDone: false},
    ],
  };
  handleDelete =(x)=>{
    this.setState({todos:this.state.todos.filter(el=>el.id!== x )})
  }
  handleComplete =(i)=>{
    this.setState (
      {todos:this.state.todos.map(el=>el.id === i ? {...el,isDone:!el.isDone}:el )})
  }
  handleAdd = (input)=> {
    const newTask = {
      id:Math.random(),
      action:input,
      isDone: false,
    }
     this.setState({todos:[...this.state.todos,newTask]})
  }
  render() {
    return (
      <div className="App">
        <AddTask add={this.handleAdd}  />
        <Todolist list={this.state.todos} del= {this.handleDelete} comp={this.handleComplete}  />
        
      </div>
    )
  }
}
