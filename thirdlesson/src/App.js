import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//npm install --save radium




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
            if(event.type == 'change'){
                this.setState({
                    persons: [
                        { name: 'Maxy', age: 28 },
                        { name: 'Stef', age: 29 },
                        { name: event.target.value, age: 27 }
                    ],
                    otherState: false
                })
            }else{
                this.setState({
                    persons: [
                        { name: 'Maxy', age: 28 },
                        { name: 'Stef', age: 29 },
                        { name: 'yolo', age: 27 }
                    ],
                    otherState: true
                })
            }
        }

        render(){
            const style = {
                backgroundColor: 'green',
                font: 'inherit',
                border: '1px solid blue',
                padding: '8px',
                cursor: 'pointer',
            }
            const pTag = [];
            if(this.state.otherState === true){ 
                style.backgroundColor = 'red'; 
                
                pTag.push('red');
            }else if(this.state.otherState === false){
                pTag.push('bold');
            }
            
            return(
                
                    <div className="App">
                        <h1>Hi, I'm a React App</h1>
                        <p className={pTag}>This is really working!</p>
                        <button style={style} onClick={this.switchNameHandler}>Switch Name</button>

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
