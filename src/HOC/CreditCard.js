import React, { Component } from 'react';
import Block from './Block';
import Bar from './Bar';
// import Image from './image';

class CreditCard extends Component {
    render() {
        const { open,toggleOpen } = this.props;
        // const cn = open?'./assets/promotion.png':'';
        return (
            <Block toggleOpen={toggleOpen}>
                <Bar>CreditCard</Bar>
                {open && <img src={require('./assets/promotion.png')} alt ='排球'></img>}
            </Block>
        );
    }
}

export default CreditCard;