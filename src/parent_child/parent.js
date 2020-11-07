import React, { Component,createRef } from 'react';
import Child from './child';

class parent extends Component {
    parentChannel = createRef()
    state={
        count:0,
    }
    addCount = () =>{
        this.setState({
            count:this.state.count +1,
        })
    }
    addChildCount = () =>{
        this.parentChannel.current.addCount();
    }
    render() {
        return (
            <div>
                <h1>Parent:{this.state.count}</h1>
                <button onClick={this.addCount}>+Parent</button>
                <button onClick={this.addChildCount}>+Child</button>
                <Child addCount={this.addCount} ref={this.parentChannel}/>
            </div>
        );
    }
}

export default parent;