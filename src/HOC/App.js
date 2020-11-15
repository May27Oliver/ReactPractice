import React from 'react';
import Promotion from "./Promotion";
import CreditCard from "./CreditCard"
import styled from "styled-components"
import WithOpen from './hocs/withOpen';

const PromotionWithOpen = WithOpen(Promotion);//將Component丟進來
const CreditCardsWithOpen = WithOpen(CreditCard);

const Wrapbox = styled.div`
    display:flex;
`

const App = () => (
    <Wrapbox>
        <PromotionWithOpen />
        <CreditCardsWithOpen />
    </Wrapbox>
);



export default App;