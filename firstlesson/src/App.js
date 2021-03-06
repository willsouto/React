import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
    
class App extends Component {
    
        state = {
            persons: [
                { name:'Max', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 26 }
            ],
            otherState: 'other value'
        }
    
        switchNameHandler = ( event ) => {
            //console.log("Button Clicked");
            //DONT DO THIS > this.state.persons[0].name = 'Maximiliano';
            this.setState({
                persons: [
                    { name: 'Maxy', age: 28 },
                    { name: 'Stef', age: 29 },
                    { name: event.target.value, age: 27 }
                ],
                otherState: this.state.otherState
            })
        }
    
        render(){
            return(
                <div className="App">
                    <h1>Hi, I'm a React App</h1>
                    <p>This is really working!</p>
                    {/* <button onClick={() => this.switchNameHandler('bad performance')}>Switch Name</button>*/}
                   
                    <Person 
                        name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person click={this.switchNameHandler.bind(this, 'good performance')}
                        name={this.state.persons[1].name} age={this.state.persons[1].age}> Children </Person>
                    <Person 
                        changed={this.switchNameHandler}
                        name={this.state.persons[2].name} age={this.state.persons[2].age} />
                </div>
            )
        };

}

export default App;
