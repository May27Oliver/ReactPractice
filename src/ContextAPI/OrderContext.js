import {createContext} from 'react';

const context = createContext({
   orders:[],
   addProduct:()=>{}, 
});

export default context;