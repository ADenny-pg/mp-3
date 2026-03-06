import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: cadetblue;
    font-family: "Trirong", sans-serif;
    font-size: calc(2px + 1.5vw);
    
    @media screen and (max-width: 750px){
        width: 100%;
        background-color: cadetblue;
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 750px){
        flex-wrap: nowrap;
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const StyledListItem = styled.li`
    border: 3px solid whitesmoke;
    margin: 5% auto;
    width: 80%;
    padding: 1%;
    text-align: center;
    
    @media screen and (max-width: 750px){
        width: 80%;
        border: 3px solid antiquewhite;
        margin: 5% auto;
        padding: 1%;
        text-align: center;
    }
`;

const StyledLink = styled(Link)`
    color: peachpuff;
    font-size: calc(2px + 1.3vw);
    text-decoration: none;
`;

export default function Nav() {
    return (
            <StyledNav>
                <StyledList>
                    <StyledListItem>
                        <StyledLink to="/">Home</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/education/education.html">Education</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/experiences/experiences.html">Experiences</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/projects/projects.html">Projects</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/skills/skills.html">Skills</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/contact/contact.html">Contact</StyledLink>
                    </StyledListItem>
                </StyledList>
            </StyledNav>
    );
}