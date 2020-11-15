import React from 'react';

const List = ({text,onChangeText,onSubmit,items})=>(
    <ul>
        <form onSubmit={onSubmit}>
            <input value={text} onChange={onChangeText} readOnly={false}/>
            {/* input欄位需要有onChange函式，不然會被設置為readonly */}
            <button type="submit">Submit</button>
        </form>
        {items.map((item,key)=>(
        <li key={item + key}>{item}</li>
        ))}
    </ul>
)

export default List;