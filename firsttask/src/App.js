import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput.js';
import UserOutput from './User/UserOutput.js';

class App extends Component {
    state = {
        User: [
            {'name': 'Will'},
            {'name': 'Doug'}
        ]
    }

     nameHandler = (event) =>{
        this.setState({
            User: [
                {'name': event.target.value },
                {'name': this.state.User[1].name },
            ]
        })
    }
    
    
    
    
    
  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.User[0].name} />
        <UserInput changed={this.nameHandler}  name={this.state.User[0].name} />
            
        <UserOutput name={this.state.User[1].name} />
      </div>
    );
  }
}

export default App;
