import React, { Component } from 'react';
import styled from 'styled-components';

const BlockArea = styled.div`
    width:500px;
`

class Block extends Component {
    render() {
        const {toggleOpen} = this.props;
        return (
        <BlockArea onClick={toggleOpen}>{this.props.children}</BlockArea>
        );
    }
}

export default Block;