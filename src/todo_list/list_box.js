import React, { Component,createRef } from 'react';
// import List from './list'

class list_box extends Component {
    myInput = createRef()
    state={
        arr_list:[
            {
                context:"早餐蛋餅"
            },
            {
                context:"中餐水餃"
            },
            {
                context:"晚餐水餃"
            }
        ]
    }
    add_item=()=>{
        const tempList = Object.assign([],this.state.arr_list);
        tempList.unshift({context:this.myInput.current.value});
        console.log('this.myInput',this.myInput)
        this.myInput.current.value="";
        this.setState({
            arr_list:tempList
        });
    }
    render() {
        const {arr_list:arr} = this.state
        return (
            <div className="list_box">
                <div className="input_box">
                    <input id="input_item" type="text" ref={this.myInput}/>
                    <button onClick={this.add_item}>新增選項</button>
                </div>
                <div className="put_item_here">
                    <ul>
                        {arr.map((item,key)=>(<li key={`item_${key}`}>{item.context}</li>))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default list_box;