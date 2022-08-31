import React from "react";
import Navbar from '../header/Navbar.js'
import styled from 'styled-components';
import Swal from 'sweetalert2'

const ButtonWrapper = styled.div`
margin : 2rem;
border : 1px solid black;
background : #CCFFFF;
`
const Button = styled.button`

/*디폴트*/
width: 7rem;
height : 2rem;
margin : 2rem;

/*커스텀*/
background : ${(props) => props.background} ;
color : ${(props) => props.color};
border : ${(props) => props.border};


`
const ButtonView = styled.button`
width: 7rem;
height : 2rem;
float : right;
margin-top : 2rem;
margin-right : 2rem;
`

const ButtonViewClick = () =>{
    Swal.fire({
        title: "Source Code",
        text: ``,
        showCancelButton: false,
        confirmButtonText: "확인",
    })
}



const Buttons = () => {
    
    return (
        <div>
            <Navbar />
            <ButtonWrapper>
            <Button color='red' background='blue' border='2px solid red'>
            Button1
            </Button>    
            <ButtonView onClick={() => ButtonViewClick()}>
            소스코드    
            </ButtonView>
            </ButtonWrapper>

            <ButtonWrapper>
            <Button color='red' background='yellow' border='2px solid red'>
            Button1
            </Button>    
            <ButtonView>
            소스코드    
            </ButtonView>
            </ButtonWrapper>
        </div>
    )
}

export default Buttons