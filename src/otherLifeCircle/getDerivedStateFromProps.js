import React, { Component } from 'react';

//getDerivedStateFromProps，執行在組件剛掛載時，是個static靜態函式，沒有this。

class MyComponent extends Component {
    static getDerivedStateFromProps(props,state){
        //出場機會少，可取代之的方法很多，如componentDidUpdate，但componentDidUpdate因為render結束後才開始，效能上getDerivedStateFromProps比較好
        //1.不能做非同步操作
        //2.接收props和state，並回傳新的
        //3.靜態函式，沒有this
        //4.mounted/props/state等階段都會呼叫
        if(props.text !== state.text){
            return {
                text:props.text,
                propText:props.text,
            }
        }
        return null;
    }
    state ={
        text:'',
        propText:'',
    }
    onChange = e => {
        this.setState({
            text:e.target.value,
        })
    }
    reset = () => {
        this.setState({
            text:this.state.propText
        })
    }
    render() {
        const { text } = this.state;
        return (
            <div>
                <input value = {text} onChange = {this.onChange}/>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default MyComponent;