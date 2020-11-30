import React, { Component } from 'react';
import {createPortal} from 'react-dom';

class LessonModal extends Component {
    render() {
        return createPortal(
            <div>LessonModal</div>,//參數一、寫入JSX
            document.getElementById('modal')//參數二、寫入欲render的標籤
        );
    }
}

export default LessonModal;