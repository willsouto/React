import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput.js';
import UserOutput from './User/UserOutput.js';

class App extends Component {
    state = {
        User: [
            {id: '1a', 'name': 'Will'},
            {id: '2a', 'name': 'Doug'},
            {id: '3a', 'name': 'Raphael'}
        ],
        ShowEditUser: false
    }

     nameChangedHandler = (event, id) =>{
         //acha index pelo id
         const userIndex = this.state.User.findIndex(u => {
             return u.id === id;
         });
         //cria objeto e distribui objeto buscado
         const user = {
             ...this.state.User[userIndex]
         };
         //cria objeto copia do state.User
         const users = [...this.state.User];
         
         user.name = event.target.value;
         //pega copia do state.User e da update no index
         users[userIndex] = user;
         
         this.setState({
            User: users
         })
         
    }
     
    editToggleHandler = () => {
        const doesShow = this.state.ShowEditUser;
        this.setState({ShowEditUser: !doesShow});
        
    }
    
    deleteUserHandler = (userIndex) => {
        //bad practice - change pointer > const users = this.state.User;
        const users = [...this.state.User];
        console.log(users);
        users.splice(userIndex,1);
        this.setState({User: users})
    }
    

  render() {
      
      /*let showEdit = (<button onClick={this.editToggleHandler}>Edit User </button>);
      
      if(this.state.ShowEditUser){
          showEdit = (
            <div >
                <UserInput changed={this.userNameHandler}  name={this.state.User[0].name} />
            </div>
          )
      }*/
      
      //~~
      
      let usersOutput = (
          <div>
              {this.state.User.map((user,i) => {
                    return (
                        <div key={user.id+"div"}>
                            <UserOutput 
                                key={user.id+"o"} 
                                click={() => this.deleteUserHandler(i)} 
                                name={user.name} 
                            /> 
                            <UserInput 
                                key={user.id+"i"} 
                                changed={(event) => this.nameChangedHandler(event, user.id)} name={user.name} 
                            />
                        </div>
                    )
              })}
          </div>
      )
      
      //~~
      
    return (
      <div className="App">
            {usersOutput}
      </div>
    );
  }
}

export default App;
