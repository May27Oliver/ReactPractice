import React, { Component } from 'react';

class CardTeacher extends Component {
    render() {
        const {
            name,
            link,
            image
        } = this.props.data;
        return (
            <a href={link} className="card__teacher">
                <img className="card__avatar" src={image} alt="teacherImg"/>
                <span>{name}</span>
            </a>
        );
    }
}

export default CardTeacher;