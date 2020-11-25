import React, { Component } from 'react';
import styled from 'styled-components';

const CourseCard = styled.div`
    display:flex;
    width:40%;
    background:#FFF7FB;
    border-radius:5px;
    padding:10px;
    margin:10px;
`
const ImageBox = styled.div`
    width:250px;
    background-image:url(${props=>props.src});
`

const CardTitle = styled.h4`
    color:#000079;
    font-family:'微軟正黑體'
`
const WordsCard = styled.div`
    padding:10px;
`
const Descript = styled.h5`
    line-height:1.5;
    letter-spacing:1px;
    font-family:'微軟正黑體';
`

class Course extends Component {
    render() {
        const {title,image,headline,...props} = this.props;
        return (
            <CourseCard>
                <img src={image} width='250px'></img>
                <WordsCard>
                    <CardTitle>{title}</CardTitle>
                    <Descript>{headline}</Descript>
                </WordsCard>
            </CourseCard>
        );
    }
}

export default Course;