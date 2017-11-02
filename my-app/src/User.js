import React from 'react';

export default function User(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>
                <p>{props.address.street}</p>
                <p>{props.address.suite}</p>
                <p>{props.address.city}</p>
                <p>{props.address.zipcode}</p>
            </td>
            <td>{props.phone}</td>
            <td>{props.website}</td>
            <td>
                <p>{props.company.name}</p>
                <p>{props.company.catchPhrase}</p>
                <p>{props.company.bs}</p>
            </td>
            <button className='btn btn-raised warning' onClick={x=>props.onDelete(props.id)}>Delete</button>
        </tr>
    );
}