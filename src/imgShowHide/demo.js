import React, { Component } from 'react';
import './demo.css';
import Dog from '../img/dog.jpg'

class demo extends Component {
    state={
        visibility:true
    }
    toggleImg= () => {
        this.setState({visibility : !this.state.visibility})
    }
    render() {
        const {visibility}=this.state;
        return (
            <div>
                <button onClick={this.toggleImg}>Toggle</button>
                <hr/>
                {/* {visibility?<img src={Dog} alt="cut dog"/>:''} */}
                {/* {visibility && <img src={Dog} alt="cut dog"/>} */}
                {/* {<img src={Dog} style={{display:visibility?"block":"none"}} alt="cut dog"/>} */}
                {/* {<img src={Dog} className={visibility?"imgShow":"imgHide"} alt="cut dog"/>} */}
                {<img src={Dog} className={`img${visibility?"Show":"Hide"}`} alt="cut dog"/>}
            </div>
        );
    }
}

export default demo;