import React, { Component } from 'react';
import Card from './Card'
import data from "./lesson-react.json" 
class app extends Component {
    render() {
        return (
            <div>
                <Card data={data}/>
            </div>
        );
    }
}

export default app;