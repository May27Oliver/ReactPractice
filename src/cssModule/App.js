import React, { Component } from 'react';
import MyButton from './MyButton';
import YourButton from './YourButton';

class App extends Component {
    state={
        changeColor:true
    }
    render() {
        const {changeColor} = this.state;
        return (
            <div>
                <MyButton changeColor={changeColor}>Hello</MyButton>
                <YourButton changeColor={changeColor}>World</YourButton>
            </div>
        );
    }
}

export default App;