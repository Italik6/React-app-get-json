import React from 'react';

export class Button extends React.Component{
        render(){
            return <button className='btn btn-raised warning' onClick={this.props.onClick}>Delete</button>                    
        }
    }