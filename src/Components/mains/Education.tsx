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

const StyledWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
`;

const StyledH1 = styled.h1`
    color: cadetblue;
`;

const StyledH3 = styled.h3`
    color: navy;
    margin-bottom: 5px;
`;

const StyledH4 = styled.h4`
    color: slategray;
    margin-bottom: 5px;
`;

const StyledList = styled.ul`
    align-items: center;
`;

const StyledListItem = styled.li`
    text-align: center;
`;

const StyledParagraph = styled.p`
    text-align: center;
`;


export default function Education() {
    return(
        <StyledMain>
            <title>Education | Resume</title>
            <StyledWrapper>
                <StyledH1>Education</StyledH1>

                <StyledH3>Boston University</StyledH3>
                <StyledH4>September 2024 - May 2028</StyledH4>
                <StyledParagraph>Bachelor of Arts in Computer Science</StyledParagraph>
                <StyledList>
                    <StyledListItem>Relevant Coursework: Data Structures and Algorithms, Discrete Math, Linear Algebra,
                        Web App Development, Computer Systems
                    </StyledListItem>
                </StyledList>

                <StyledH3>Yonkers Middle High School</StyledH3>
                <StyledH4>September 2020 - June 2024</StyledH4>
                <StyledParagraph>NYS Regents Diploma</StyledParagraph>
                <StyledList>
                    <StyledListItem>GPA: 4.0/4.0</StyledListItem>
                    <StyledListItem>2023 FIRST Robotics Championship NYC Regional Winners</StyledListItem>
                </StyledList>
            </StyledWrapper>
        </StyledMain>
    );
}