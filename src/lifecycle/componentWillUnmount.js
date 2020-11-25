import React, { Component } from 'react';

class MyComponent extends Component {
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }
    componentDidUpdate(prevProps,prevState){
        this.timer = setTimeout(()=>this.update(),3000)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll);
        clearTimeout(this.timer);
    }
    onScroll = ()=>{
        //...
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