import {useState} from "react";
import styled from "styled-components";

const CalcContainer = styled.div`
    max-width: 600px;
    margin: 40px auto;
    padding: 40px;
    border-radius: 20px;
    background: cadetblue;
    border: 1px solid #eaeaea;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const StyledH2 = styled.h2`
    text-align: center;
    color: #333;
    font-size: calc(2px + 1.3vw);
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin: 0 0 30px 0;
`;

const StyledInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 0 25px 0;
    align-content: center;
    background-color: antiquewhite;
    border: 5px solid #eaeaea;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;

    @media screen and (max-width: 750px){
        align-items: center;
        padding: 15px;
        gap: 15px;
    }
`;

const StyledInput = styled.input`
    flex: 1 1 0;
    min-width: 0;
    width: 100%;
    padding: 15px;
    font-size: calc(2px + 1.3vw);
    border: 3px solid cadetblue;
    border-radius: 10px;
    background: antiquewhite;
    text-align: center;
    box-sizing: border-box;
    margin: 0;

    @media screen and (max-width: 750px){
        width: 100%;
        max-width: 300px;
        flex: 0 0 auto;
        margin: 0 auto;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    margin: 0;
`;

const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 0 25px 0;

    @media screen and (max-width: 750px){
        flex-wrap: wrap;
        align-content: center;
    }
`;

const StyledButton = styled.button`
    flex: 1;
    padding: 15px;
    font-size: calc(2px + 1.3vw);
    border: none;
    border-radius: 8px;
    background: antiquewhite;
    color: cadetblue;
    margin: 0;

    @media screen and (max-width: 750px){
        min-width: 60px;
        flex: 1 0 auto;
    }
`;

const StyledOutputContainer = styled.div`
    background: antiquewhite;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0 0 0;
`;

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

const StyledLabel = styled.label`
    font-family: "Audiowide", sans-serif;
    font-size: calc(2px + 1.1vw);
    color: cadetblue;
    font-weight: bold;
    min-width: 60px;
    text-align: center;
    padding: 0 5px;
    margin: 0;
    
    @media screen and (max-width: 750px){
        text-align: center;
        font-size: calc(4px + 1.5vw);
    }
`;

const StyledOutput = styled.h3`
    color: ${(props)=>props.theme===true?"red":"black"};
`;

export default function Projects() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function doAdd(){
        setOutput(Number(input1)+Number(input2));
    }

    function doSub(){
        setOutput(Number(input1)-Number(input2));
    }

    function doMul(){
        setOutput(Number(input1)*Number(input2));
    }

    function doDiv(){
        setOutput(Number(input1)/Number(input2));
    }

    function doPower(){
        const base: number = Number(input1);
        const exponent: number = Number(input2);
        let ans: number;

        if (exponent === 0) {
            ans = 1;
        } else if(exponent > 0) {
            ans = base;
            for (let i: number = 1; i < exponent; i++) {
                ans *= base;
            }
        } else {
            ans = 1;
            for (let i: number = 0; i < -exponent; i++) {
                ans *= base;
            }

            ans = 1 / ans;
        }
        setOutput(ans);
    }

    function clearCalc(){
        setInput1("");
        setInput2("");
        setOutput(0);
    }
    return (
        <StyledMain>
            <title>Projects | Resume</title>
            <CalcContainer>
                <StyledH2>JavaScript Calculator</StyledH2>

                <StyledInputGroup>
                    <InputWrapper>
                        <StyledLabel htmlFor="first">First</StyledLabel>
                        <StyledInput
                            id={'first'}
                            value={input1}
                            placeholder={'Enter a number'}
                            onChange={(e)=>setInput1(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <StyledLabel htmlFor="second">Second</StyledLabel>
                        <StyledInput
                            id={'second'}
                            value={input2}
                            placeholder={'Enter a number'}
                            onChange={(e)=>setInput2(e.target.value)}
                        />
                    </InputWrapper>
                </StyledInputGroup>

                <StyledButtons>
                    <StyledButton onClick={doAdd}>+</StyledButton>
                    <StyledButton onClick={doSub}>-</StyledButton>
                    <StyledButton onClick={doMul}>*</StyledButton>
                    <StyledButton onClick={doDiv}>/</StyledButton>
                    <StyledButton onClick={doPower}>**</StyledButton>
                    <StyledButton onClick={clearCalc}>Clear</StyledButton>
                </StyledButtons>

                <StyledOutputContainer>
                    <StyledOutput theme={output<0?true:false}>
                        {output}
                    </StyledOutput>
                </StyledOutputContainer>
            </CalcContainer>
        </StyledMain>
    );
}