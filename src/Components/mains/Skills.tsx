import {Link} from "react-router";
import styled from "styled-components";

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

const StyledH1 = styled.h1`
    color: cadetblue;
`;

const StyledH3 = styled.h3`
    color: navy;
    margin-bottom: 5px;
`;


export default function Skills(){
    return(
        <StyledMain>
            <title>Skills | Resume</title>
            <div id="skills-wrapper">
                <StyledH1>Skills & Competencies</StyledH1>

                <StyledH3>Technical Skills</StyledH3>

                <h4>Programming Languages</h4>
                <p>Java, JavaScript, Python, HTML/CSS, C, X86 Assembly</p>

                <h4>Tools & Technologies</h4>
                <p>Git, VS Code, Github</p>

                <StyledH3>Projects as Proof of Skill</StyledH3>
                <p>While I pursue formal certifications, I demonstrate my abilities through hands-on projects.</p>
                <Link to="projects.html">View My Projects</Link>
            </div>
        </StyledMain>
    );
}