import React from 'react';
import ReactDOM from 'react-dom'; //reactDOM，把react掛載到DOM上用的
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

// import ListBox from './todo_list/list_box';
// import Parent from './imgShowHide/demo'
// import Progress from './ComponentThreeType/progress'
// import App from './infoCardPrac/app';
// import App from './HOC3/App'
// import App from './HOC4_todo_list_practice/App'
// import App from './twoWayBinding/App'
// import App from './fileTree/App'
// import App from './infinityScroll/App'
// import App from "./getDerivedStateFromError/App"
// import App from './portal/App'
import App from './ContextAPI/App'

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root')
);
