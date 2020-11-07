import React, { Component } from 'react';

class child extends Component {
    state={
        count:0,
    }
    addCount = () =>{
        this.setState({
            count:this.state.count +1,
        })
    }
    render() {
        const {addCount:addParentCount}=this.props
        return (
            <div>
                <h1>Child:{this.state.count}</h1>
                <button onClick={addParentCount}>+Parent</button>
                <button onClick={this.addCount}>+Child</button>
            </div>
        );
    }
}

export default child;