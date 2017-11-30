import React from 'react';
import { Button } from './Button'

export class User extends React.Component{
    render(){
        let p = this.props;
        return(
            <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.username}</td>
                <td>{p.email}</td>
                <td>
                    <p>{p.address.street}</p>
                    <p>{p.address.suite}</p>
                    <p>{p.address.city}</p>
                    <p>{p.address.zipcode}</p>
                </td>
                <td>{p.phone}</td>
                <td>{p.website}</td>
                <td>
                    <p>{p.company.name}</p>
                    <p>{p.company.catchPhrase}</p>
                    <p>{p.company.bs}</p>
                </td>
                <td>
                    <Button onClick={x => p.onDelete(p.id)} />
                </td>
            </tr>
        );
    }
}