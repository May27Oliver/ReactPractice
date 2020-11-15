import React, { Component } from 'react';
import Block from './Block';
import Bar from './Bar';
// import Image from './image';

class Promotion extends Component {
    render() {
        const { open,toggleOpen } = this.props;
        console.log('open',open);
        return (
            <Block toggleOpen={toggleOpen}>
                <Bar >Promotion</Bar>
                {open && <img src={require('./assets/six.jpg')} alt="六花"/>}
            </Block>
        );
    }
}

export default Promotion;