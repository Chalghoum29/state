import React, { Component } from 'react'

export default class AddTask extends Component {
    state={
        newText:""

    }
    handleChange= (e)=>this.setState({newText:e.target.value});
    
    handleSubmit= (e)=>this.setState({
        e.preventDefault();
        this.props.add(this.state.newText);
        this.setState({newText:""})

    })
    render() {
        return (
            <div>
                <h1> Our Add </h1>
               <form onSubmit={this.handleSubmit}>
                  <input 
                  type="text" 
                  value={this.state.newText} 
                  onChange={this.handleChange} />
                   <button>Add</button>
               </form>
            </div>
        )
    }
}
