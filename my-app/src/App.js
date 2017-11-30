import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import { AppContainer } from './AppContainer';

export const App = () => {
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
            <AppContainer />
      </table>
      </div>
    ); 
}