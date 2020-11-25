import React, { Component } from 'react';
import style from 'styled-components';

const InputStyle = style.input`
    margin:10px;
    line-height: 27px;
    height: 27px;
    background: #E8EAEC;
    border-radius: 10px;
    box-shadow: inset -3px -3px 8px rgba(255,255,255), inset 3px 3px 20px rgba(13,39,80, .288);
    border: none;
    outline: none;
    padding-left:15px;
`;

class input extends Component {
    state={
        text:''
    }
    onChangeText=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    render() {
        const {text} = this.state
        return (
            <div>
                <InputStyle value={text} onChange={this.onChangeText}/>
                <h2>{text}</h2>
            </div>
        );
    }
}

export default input;