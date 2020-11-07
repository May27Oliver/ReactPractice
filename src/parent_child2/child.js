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
        const {addParentCount,addChildCount,childCount}=this.props;
        console.log('addParentCount',addParentCount)
        console.log('addChildCount',addChildCount)
        console.log('childCount',childCount)

        return (
            <div>
                <h1>Child:{childCount}</h1>
                <button onClick={addParentCount}>+Parent</button>
                <button onClick={addChildCount}>+Child</button>
            </div>
        );
    }
}

export default child;