import React from 'react';
import styled from 'styled-components';

function Section({title, description,backgroundImg, leftBtnText, rightBtnText}) {
    return (
        <Wrap>
            <Container bgImage={backgroundImg}>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>  
                </ItemText>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Container>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    display: flex;
    flex-direction: column;
    align-items: center; // horizontal
    justify-content: space-between; //vertical
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #ffffff;
    color: #000000;
    opacity: 0.65;
    text-transform: uppercase;
`

const DownArrow = styled.img`
    margin-top: 15px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 40px;
    overflow-x: hidden;
    text-transform: uppercase;
`


