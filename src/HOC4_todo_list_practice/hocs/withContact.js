import contact from '../contact.json';
import React,{Component} from 'react';

export default WrappedComponent => class extends Component{
    state={
        item:contact
    }
    render(){
        const {item} = this.state;
        return <WrappedComponent
            {...this.props}
            header={item}
        />
    }
}