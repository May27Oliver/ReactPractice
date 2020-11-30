import React, { Component } from 'react';

class MyComponent extends Component {
    componentDidMount(){
        JSON.parse('asddfg')
    }
    render() {
        return (
            <div>
                MyComponent
            </div>
        );
    }
}

export default MyComponent;