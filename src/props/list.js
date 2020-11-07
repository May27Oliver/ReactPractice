import React, {Component} from 'react';
import Item from './item'

class List extends Component {
    render(){
        return (
            <ol>
                <Item>早餐蛋餅</Item>
                <Item>午餐水餃</Item>
                <Item>晚餐米糕</Item>
                <Item>消夜香蕉</Item>
            </ol>
        )
    }
}

export default List;