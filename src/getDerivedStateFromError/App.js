import React, { Component } from 'react';
import MyComponent from './MyComponent'

class App extends Component {
    state={
        hasError:false,
        err:''
    }
    static getDerivedStateFromError(error){
        return { hasError:true,err:error };
    }
    render() {
        const {hasError,err} = this.state;
        if(hasError){
            return <h1>Error</h1>
        }
        return (
            <MyComponent/>
        );
    }
}

export default App;