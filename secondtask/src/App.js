import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {
    state = {
        inputValue: '',
    }; 
    
    inputChangedHandler = (event) => {
        this.setState({ 
            inputValue: event.target.value,
        })
    }
    
    removeChar = (index) => {
        const text = this.state.inputValue.split('');
        text.splice(index,1);
        const updatedValue = text.join('');
        this.setState({inputValue: updatedValue})
    }
   
    
    
  render() {
    const charList =
                this.state.inputValue.split('').map((char,index) =>{
                    return (
                        <CharComponent 
                            character={char}
                            key={index}
                            clicked={()=>this.removeChar(index)}
                        />
                    )
            })
         
    return (
      <div className="App">
        <input type="text" className="trackingInput" onChange={(event) => this.inputChangedHandler(event)} value={this.state.inputValue} />
        <ValidationComponent inputLenght={this.state.inputValue.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
