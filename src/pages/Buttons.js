import React from "react";
import Navbar from '../header/Navbar.js'
import styled from 'styled-components';

const ButtonWrapper = styled.div`
margin : 2rem;
border : 1px solid black;
`
const Button1 = styled.button`
width: 7rem;
height : 2rem;
margin : 2rem;

`

const Button1View = styled.button`
width: 7rem;
height : 2rem;
float : right;
margin-top : 2rem;
margin-right : 2rem;
`

const Buttons = () => {
    return (
        <div>
            <Navbar />
            <ButtonWrapper>
            <Button1>
            Button1
            </Button1>    
            <Button1View>
            소스코드    
            </Button1View>
            </ButtonWrapper>

            <ButtonWrapper>
            <Button1>
            Button1
            </Button1>    
            <Button1View>
            소스코드    
            </Button1View>
            </ButtonWrapper>
        </div>
    )
}

export default Buttons