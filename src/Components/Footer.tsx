import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    padding: 1%;
    text-align: left;
    width: 100%;
    
    @media screen and (max-width: 750px){
        text-align: center;
    }
    
    p{
        font-size: calc(2px + 1.5vw);
    }
`;

export default function Footer() {
    return(
        <StyledFooter>
            <p> All rights reserved &#169;<Link to=""> Credits </Link></p>
        </StyledFooter>
    );
}