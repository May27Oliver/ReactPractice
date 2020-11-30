import React, { Component } from 'react';
import OrderContext from './OrderContext';

class Product extends Component {
    render() {
        const {id,name} = this.props;
        return (
            <li>
                <label>{name}</label>
                <OrderContext.Consumer>
                    {value=>(<button onClick={()=>(value.addProduct(name))}>+</button>)}
                </OrderContext.Consumer>
            </li>
        );
    }
}

export default Product;