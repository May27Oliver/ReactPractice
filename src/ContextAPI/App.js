import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import OrderContext from './OrderContext'

/*
    當使用Context Api時Context要有兩個組件，Provider和Consumer
    1.Provider把JSX子組件包起來，並把value帶入
    2.Consumer在子組件內，接一個function，{value=>(
        ...value
    )}
*/

class App extends Component {
    state={
        orders:[],
    }
    addProduct = item =>{
        this.setState({
            orders:[...this.state.orders,item],
        });
    }
    render() {   
        const {orders} = this.state;
        const contextValue = {
            orders,
            addProduct:this.addProduct
        }
        return (
            <div>
                <OrderContext.Provider value={contextValue}>
                    <Header/>
                    <ProductList/>
                </OrderContext.Provider>
            </div>
        );
    }
}

export default App;