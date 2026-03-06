import styled from 'styled-components';

const StyledMain = styled.main`
    width: 70%;
    height:auto;
    min-height: 100vh;
    text-align: center;
    font-size: calc(2px + 1.5vw);
    font-family: "Audiowide", sans-serif;

    @media screen and (max-width: 750px){
        width: 100%;
        height: auto;
        min-height: 100vh;
    }
`;

const StyledImg = styled.img`
    width: 65%;
    max-width: 100%;
    height: auto;
    border-width: 20px;
    border-style: ridge;
    border-color:cadetblue;

    @media screen and (max-width: 750px){
        width: 90%;
        max-width: 300px;
        border-width: 10px;
    }
`;

export default function Home(){
    return (
        <StyledMain>
            <title>Home | Resume</title>
            <StyledImg src="/adenny.jpg" alt="Alen Denny"/>
            <h4>I am an ambitious Computer Science undergraduate at Boston University. I am looking to gain hands-on
                experience in a technical field
                where I can apply my knowledge of programming and problem-solving to grow professionally and develop new
                skills. Please contact me with any
                opportunities.
            </h4>
        </StyledMain>
    );
}