import React, { Component } from 'react';
import './App.css';
import * as $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import User from './User'

class App extends Component {
  constructor(props){
    super(props);
    this.state={users:[]};
  }
// Method to get data from url  
  async componentWillMount(){
    $.get("https://jsonplaceholder.typicode.com/users").then(resp=>{
      this.setState({users:resp});
    })
  }
// Remove item from a table
  deleteUser = async (id)=>{
    //API CALL SHOULD BE HERE
    this.setState({users:this.state.users.filter(x=>x.id!==id)})
  }

  render() {
    return (
      <div className="App">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           
              {
                this.state && this.state.users.map(u=><User {...u} onDelete={this.deleteUser}/>)
              }
         
          </tbody>
        </table>
      </div>
    ); 
  }
}

export default App;