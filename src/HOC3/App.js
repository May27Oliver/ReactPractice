import React from 'react';
import styled from "styled-components"
import WithNames from './hocs/withNames';
import WithTodos from './hocs/withTodo';
import List from './List'

const WithNamesList = WithNames(List);//將Component丟進來
const WithTodosList = WithTodos(List);

const Wrapbox = styled.div`
    display:flex;
`

const App = () => (
    <Wrapbox>
        <WithNamesList />
        <WithTodosList />
    </Wrapbox>
);



export default App;