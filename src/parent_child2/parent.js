import React, { Component,createRef } from 'react';
import Child from './child';

class parent extends Component {
    parentChannel = createRef()
    state={
        count:0,
        childCount:0
    }
    addCount = () =>{
        this.setState({
            count:this.state.count +1,
        })
    }
    addChildCount = () =>{
        this.setState({
            childCount:this.state.childCount +1,
        })
    }
    render() {
        return (
            <div>
                <h1>Parent:{this.state.count}</h1>
                <button onClick={this.addCount}>+Parent</button>
                <button onClick={this.addChildCount}>+Child</button>
                <Child 
                    addParentCount={this.addCount} 
                    addChildCount={this.addChildCount} 
                    parentCount={this.state.count} 
                    childCount={this.state.childCount}
                />
            </div>
        );
    }
}

export default parent;