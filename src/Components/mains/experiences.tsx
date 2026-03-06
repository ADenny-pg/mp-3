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

const StyledExperience = styled.div`
    min-height: 100vh;
    height:auto;

    @media screen and (max-width: 750px){
        height: auto;
    }
`;

const StyledH2 = styled.h2`
    color: cadetblue;
`;

const StyledH3 = styled.h3`
    color: navy;
    margin-bottom: 5px;
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

export default function Experiences() {
    return (
        <StyledMain>
            <title>Experiences | Resume</title>
            <StyledExperience>
                <StyledH2>Work Experiences</StyledH2>

                <StyledH3>Electrician’s Assistant</StyledH3>
                <p>MATH Electricals Inc</p>
                <p>Sep 2020 - Jun 2024</p>
                <p>Yonkers, New York, United States</p>
                <ul>
                    <li>Assisted on electrical jobs across the tri-state area</li>
                    <li>Assisted in installing ceiling fans, lighting fixtures,
                        panel boards and pulling wire leading to a 35% increase in work completed per day.
                    </li>
                    <li>Loaded, carried and transported tools to jobsite</li>
                </ul>

                <StyledH2>Extracurricular</StyledH2>

                <StyledH3>FIRST Robotics Competition</StyledH3>
                <h4>FRC Team 5123</h4>
                <StyledImg src="../../../public/robot.jpg" alt="Robot"/>
                <ul>
                    <li>Architected and programmed robot control systems using Java and FRC framework, leading team to
                        2023 NYC Regional
                        Championship victory and World Championship qualification
                    </li>
                    <li>Engineered compact double-decker control board design to optimize space utilization, integrating
                        Talon and Spark motor
                        controllers with custom wiring solutions
                    </li>
                    <li>Oversaw full hardware-software integration lifecycle: from control board wiring and sensor
                        installation to Java program
                        deployment and system validation
                    </li>
                    <li>Developed and delivered technical training curriculum for team members on control systems
                        wiring, motor controller
                        programming, and software-hardware integration
                    </li>
                    <li>Collaborated with mechanical and design departments to ensure control systems aligned with robot
                        architecture and
                        competition requirements
                    </li>
                </ul>
            </StyledExperience>
        </StyledMain>
    );
}