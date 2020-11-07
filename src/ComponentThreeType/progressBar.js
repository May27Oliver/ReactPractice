import React, { Component,PureComponent } from 'react';

// class Component
class progressBar extends Component {
    render() {
        const {value} = this.props;
        console.count('render');
        return (
            <div>
                <div className="bar-outer">
                    <div className="bar-inner"
                        style={{width:`${value}%`}}
                    ></div>    
                </div>
                <span>{value}%</span>
            </div>
        );
    }
}

//functional Component 當一個component沒有state也沒有函式，就可以直接寫成function，比較直覺。
// const progressBar = props=>{
//     const {value} = props;
//     return (
//         <div>
//             <div className="bar-outer">
//                 <div className="bar-inner"
//                     style={{width:`${value}%`}}
//                 ></div>    
//             </div>
//             <span>{value}%</span>
//         </div>
//     )
// }
 
//pure Component props裡面的值沒有變就不render，就可以用pureComponent，是很好的選擇，節省效能
//pure Component會進行shallow compare，物件第一層比較，物件第二層改變則不render
// class progressBar extends PureComponent {
//     render() {
//         const {value} = this.props;
//         return (
//             <div>
//                 <div className="bar-outer">
//                     <div className="bar-inner"
//                         style={{width:`${value}%`}}
//                     ></div>    
//                 </div>
//                 <span>{value}%</span>
//             </div>
//         );
//     }
// }
export default progressBar;