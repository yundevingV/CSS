import react from 'react'
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import CssImgLink from './cssImg.jpg';


const Nav = styled.div`
background : #FFFF66;
width : 100%;
height : 5rem;
display  : inline-block
`

const CssImgWidth = '100px'
const CssImgHeight = '80rem'

const Img = styled.div`
display  : inline-block
`

const MenuFontSize = '1.5rem'

const Menu = styled.li`

display :inline-block;
height : 3rem;
margin-left : 5rem;
padding : 1rem;

/* 글씨 올리기 */
vertical-align : top;

font-size : ${MenuFontSize};

/*시간에 따라 변화주기 */
transition: 1s;

&:hover {
    color: #0000FF;
    transition: 0.5s;
    border-bottom : solid 1px #0000FF;
;


}
&:active {
    /*background: ${darken(0.2,'#FFFF66')};*/
  }

`


function Navbar() {
    return (
        <Nav> 
        <Img> <img src={CssImgLink} alt='X' width={CssImgWidth} height={CssImgHeight} /> </Img>
        <Menu> Button </Menu>
        <Menu> Nav </Menu>
        <Menu> Div </Menu>
        </Nav>
    )
}

export default Navbar