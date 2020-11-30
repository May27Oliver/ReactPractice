import React, { Component } from 'react';
import OrderContext from './OrderContext'


class Header extends Component {
    render() {
        const {orders} = this.props;
        return (
            <div>
               <span>
                <OrderContext.Consumer>
                   {value=>(`購物車(${value.orders.length})`)} 
                </OrderContext.Consumer>
                </span> 
                <hr/>
            </div>
        );
    }
}

export default Header;