import React from 'react';
import styled from 'styled-components'

const OliListHeaderUl = styled.div`
    box-sizing:border-box;
    margin:5px;
    display:flex;
    border-radius:10px 10px 0 0;
    overflow:hidden;
`

const OliListHeaderLi = styled.div`
    list_style:none;
    flex:1;
    display:block;
    background-color:#6C6024;
    line-height:50px;
    height:50px;
    text-align:center;
    font-weight:bold;
    font-size:25px;
    color:#fff;
`

const List = (props)=>{
    const {contact_header,contact_list} = props.header;
    return <OliListHeaderUl>
        {contact_header.map(item=>(<OliListHeaderLi>{item.title}</OliListHeaderLi>))}
    </OliListHeaderUl>

}

export default List;