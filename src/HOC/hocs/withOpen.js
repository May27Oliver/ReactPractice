import React , {Component} from 'react';

const withOpen = (WrappedComponent)=>{
    return class extends Component{
        state={//HOC可以把state和function賦予給作為參數丟進來的component
            open:false,
        };
        toggleOpen = () =>{
            this.setState({
                open:!this.state.open,
            })
        }
        render(){
            const {open} = this.state;
            return(<WrappedComponent 
                    open={open} 
                    toggleOpen={this.toggleOpen} 
                    {...this.props}//慣例要注入這個
                    />)
        }
    }
}

export default withOpen;