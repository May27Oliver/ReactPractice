import React, { Component } from 'react';

class FileNode extends Component {
    state={
        open:false
    }
    toggle=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        const {open} = this.state;
        const {name,files} = this.props;
        // const cn = open?'folder open':'folder';
        if(!files){
            return <li onClick={this.toggle}>{name}</li>
        }
        return (
            <div>
                <div className={`folder ${open?'open':''}`} onClick={this.toggle}>{name}</div>
                {
                    open?(<ul key={files}>
                        {files.map((file) => 
                        (<FileNode {...file}/>//組件可以引用自己
                        ))}
                    </ul>):'' 
                }
            </div>
        );
    
       
    }
}

export default FileNode;