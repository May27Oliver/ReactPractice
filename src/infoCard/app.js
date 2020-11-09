import React, { Component } from 'react';
import Card from "./Card";
import lesson from "./lesson-react.json";
class app extends Component {
    render() {
        return (
            <div>
                <Card data ={lesson}/>
            </div>
        );
    }
}

export default app;