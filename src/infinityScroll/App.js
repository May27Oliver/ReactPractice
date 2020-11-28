import React, { Component } from 'react';
import Courses from './Course'

const api = 'https://api.hiskio.com/v1/courses?profession_id=1'
class App extends Component {
    state={
        courses:[],
        loading:false,
        next:''
    }
    componentDidMount(){
        this.fetchData(api);
        window.addEventListener('scroll',this.onScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll);
    }
    onScroll = ()=>{
        // window.scrollY; 卷軸高度
        // window.innerHeight; 視窗高度
        // document.body.scrollHeight; 內容高度
        // 如果卷軸高度 + 視窗高度 == 內容高度，代表內容到底
        const {next , loading} = this.state;
        if(loading)
            return;
        if(!next)
            return;
        if(window.scrollY + window.innerHeight > document.body.scrollHeight - 100){
            this.fetchData(next);
        }
    }
    fetchData = url =>{
        this.setState({
            loading : true
        });
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            this.setState({
                courses:[...this.state.courses,...data.data],
                next:data.links.next,
                loading:false
            })
        })
    }
    render() {
        const {courses} = this.state;
        return ( 
            <div id="wrap">
                {courses.map(item=>(<Courses key={item.id} {...item}></Courses>))}
            </div>
        )
    }
}

export default App;