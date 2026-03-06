import styled from "styled-components";

const StyledHeader = styled.header`
    text-align: left;

    @media screen and (max-width: 750px){
        text-align: center;
    }
`;

export default function Header() {
    return (
            <StyledHeader>
                <h1>Alen's Resume</h1>
                <p>An online website showcasing Alen's projects and aspirations</p>
            </StyledHeader>
    );
}