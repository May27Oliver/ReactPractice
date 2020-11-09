import React, { Component } from 'react';

class CardDesc extends Component {
    state={
        open:true
    }
    toggle = ()=>{
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        const {desc} = this.props
        const {open} = this.state
        const cn = `card__desc__text ${open?'': 'less'}`
        console.log('cn',cn)
        return (
            <div>
                <div className={cn}>
                    {desc}
                </div>
        <button className="card_desc_btn" onClick={this.toggle}>{open?"Less":"More"}</button>
            </div>
        );
    }
}

export default CardDesc;