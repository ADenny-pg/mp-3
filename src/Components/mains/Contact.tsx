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

export default function Contact(){
    return(
        <StyledMain>
            <title>Contact | Resume</title>
            <div id="contacts">
                <h1>Contact Me</h1>
                <h3>Edu Email: adenny@bu.edu</h3>
                <h3>Personal Email: alendenny2015@gmail.com</h3>
                <h3>Mobile Phone:(914) 792-8629</h3>
                <h3>Home Phone: (914) 207-0966</h3>
                <Link to="https://www.linkedin.com/in/alendenny2006">LinkedIn</Link>
                <Link to="https://github.com/ADenny-pg">Github</Link>
            </div>
        </StyledMain>
    );
}