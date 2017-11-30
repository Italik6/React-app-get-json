import React from 'react';
import  $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import { User } from './User';

export class AppContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={users:[]};
    this.deleteUser = this.deleteUser.bind(this);
  }
// Method to get data from url  
  componentDidMount(){
    $.get("https://jsonplaceholder.typicode.com/users").then(resp=>{
      this.setState({users:resp});
    })
  }
// Remove item from a table
  deleteUser = (id) => {
    //API CALL SHOULD BE HERE
    this.setState({users:this.state.users.filter(x=>x.id!==id)})
// Alert after removed the last item from table
    if(this.state.users.length <= 1){
      alert('There are no records in your table.')
    }
  }
  render() {
    return (
         <tbody>
              { this.state && this.state.users.map(u=><User key={u.id} {...u} onDelete={this.deleteUser}/>) }
         </tbody>
    ); 
  }
}