import React, { Component } from 'react';

class Profile extends Component {
    state={
        userData:{},
    };
    componentDidMount(){//componentDidMount適合用來抓AJAX
        this.fetchUser(this.props.userID);
    }
    componentDidUpdate(preProps,preState,snapshot){//這三個參數都是Update發生前的props、state
        if(preProps.userID!==this.props.userID){//務必加入condition判斷式判斷props值是否改變
            this.fetchUser(this.props.userID);
        }
    }
    fetchUser = (userID) => {
        fetch(`http://mysite.com/api/user/${userID}`)
        .then((res)=>res.json())
        .then(data=>{
            this.setState({
                userData:data,
            });
        });
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default componentDidUpdate;