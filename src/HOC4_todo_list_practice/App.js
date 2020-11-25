import React, { Component } from 'react';
import List from './List';
import WithContact from './hocs/withContact'
import './style.css'

const ContactList = WithContact(List);

class App extends Component {
    render() {
        return (
            <ContactList/>
        );
    }
}

export default App;