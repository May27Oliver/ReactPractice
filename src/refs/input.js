import React, { Component,createRef } from 'react';

class input extends Component {
    // myInput = createRef();
    constructor(props){
        super(props);
        this.myInput=createRef();
    }
    componentDidMount(){
        this.myInput.current.focus();
    }
    render() {
        return (
            <div>
                <h3>Enter Your name</h3>
                <input type="text" ref={this.myInput}/>
            </div>
        );
    }
}

export default input;