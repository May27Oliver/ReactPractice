import React from 'react';
import styled from "styled-components"

const Blackbox = styled.div`
    background-color:black;
    color:#ffffff;
    width:500px;
    line-height:50px;
    text-align:center;
`

const Bar =(props)=>(
    <Blackbox>{props.children}</Blackbox>
)

export default Bar;