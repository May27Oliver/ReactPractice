import React, { Component } from 'react';

class CardTeacher extends Component {
    render() {
        const {name,link,image} = this.props.data;
        return (
            <div>
                <a href={link} className="card__teacher" >
                    <img className="card__avatar" src={image} alt=""/>
                    <span>{name}</span>
                </a>
            </div>
        );
    }
}

export default CardTeacher;