import React, { Component } from 'react';

class NameCard extends Component {
    render() {
        return (
            <h2>
                Hello,
               {props.name} 
            </h2>
        );
    }
}

function Wrapper(Item){
    const props = {name:"Chu"}
    return <Item {...props}/>
}

const element = Wrapper(NameCard);