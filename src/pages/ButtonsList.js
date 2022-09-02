import React from "react";
import Navbar from '../header/Navbar.js'
import styled, {css} from 'styled-components';
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

${(props) =>
    props.button1 &&
    css`
    color: white;
    background: navy;
    border-color: navy;

    &:hover {
        color: #0000FF;
        transition: 0.5s;
        border-bottom : solid 1px #0000FF;
}
`}
${(props) =>
    props.button2 &&
    css`
    color: red;
    background: yellow;


`}

`

const ButtonView = styled.button`
width: 7rem;
height : 2rem;
float : right;
margin-top : 2rem;
margin-right : 2rem;
`



const ButtonViewClick = (num) =>{
    Swal.fire({
        title: "Source Code",
        html: `
        color : <strong>${buttons[num].color}</strong> <br />
        background : <strong>${buttons[num].background}</strong> <br />
        border : <strong>${buttons[num].border}</strong><br />
        hover : <strong>${buttons[num].hover}</strong>`,
        showCancelButton: false,
        confirmButtonText: "확인",
    })
}


/* 버튼배열*/
const buttons = [
    {
        id : 1,
        color : 'white',
        background : 'navy',
        border : 'none',
        hover : `color: #0000FF<br />
        transition: 0.5s<br />
        border-bottom : solid 1px #0000FF`
    },
    {
        id : 2,
        color : 'red',
        background : 'yellow',
        border : '2px solid red',
        hover : `
            none
            `
    },
    {
        id : 3,
        color : 'rasdasded',
        background : 'yellow',
        border : '2px solid red',
    }

]

function ButtonsList(){
    
    return (
        <div>
            <Navbar />
            <ButtonWrapper>
            <Button button1>
            Button1
            </Button>    
            <ButtonView onClick={() => ButtonViewClick(0)}>
            소스코드    
            </ButtonView>
            </ButtonWrapper>

            <ButtonWrapper>
            <Button button2>
            Button2
            </Button>    
            <ButtonView onClick={() => ButtonViewClick(1)}>
            소스코드    
            </ButtonView>

            </ButtonWrapper>

        </div>
    )
}

export default ButtonsList