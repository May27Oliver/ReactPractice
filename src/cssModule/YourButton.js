import React, { Component } from 'react';
import style from './YourButton.module.css'

const YourButton = ({children})=> (
    <button className={style.btn2}>{children}</button>
);

export default YourButton;