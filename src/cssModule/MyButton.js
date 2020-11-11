import React, { Component } from 'react';
// import style from './MyButton.module.css'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #cde;
    border-radius: 20px;
    font-size: 2em;
    width: 250px;
    text-align: center;
    padding: 0.5em 0;
    margin: 0.5em;
`
const ButtonText = styled.span`
    color:${props=>props.changeColor?'red':'yellow'};
`

const MyButton = (props)=>(
    <Button>
        <ButtonText changeColor={props.changeColor}>{props.children}</ButtonText>
    </Button>
);
 

export default MyButton;