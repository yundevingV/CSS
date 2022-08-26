import styled from 'styled-components';

const StrongSpanSection = styled.section`
${StrongSpan} {
    font-size : ${props => props.big? '7rem' : '2rem'};
    color : ${(props) => props.color};
    padding : ${props => props.first? '1.5rem' : ''};

}
`
const StrongSpan = styled.span`

`

const CssInfoBox = styled.div`
padding: 5rem;

background: #FFCCCC;
border-radius : 50px;

`

function CssInfo(){
    return (
        <>
        <StrongSpanSection>
        <StrongSpan color='blue' big first>C</StrongSpan>
        <StrongSpan >omponent</StrongSpan>
        <StrongSpan big color='blue'>S  </StrongSpan>
        <StrongSpan big color='blue'>S</StrongSpan>
        <StrongSpan>ervice</StrongSpan>
        </StrongSpanSection>
        <CssInfoBox>
            CSS 는 ComponentS Service 의 줄임말로<br />
            기여자들 끼리 서로 좋은 컴포넌트를 공유하자는 뜻을 가진 서비스입니다.
        </CssInfoBox>

        </>

    )
}

export default CssInfo