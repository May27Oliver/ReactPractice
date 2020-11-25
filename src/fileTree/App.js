import React, { Component } from 'react';
import files from './files.json';
import FileNode from './fileNode';
import './style.css'

class App extends Component {
    render() {
        return (
            <div>
                <FileNode {...files}></FileNode>
            </div>
        );
    }
}

export default App;