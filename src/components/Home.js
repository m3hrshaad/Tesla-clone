import React from 'react';
import Section from './Section';
import styled from 'styled-components';
function Home() {
    return (
        <div>
            <Container>
                <Section 
                    title="Model S"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-s.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing invetory"
                />
                <Section 
                    title="Model Y"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-y.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing invetory"
                />
                <Section 
                    title="Model 3"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-3.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing invetory"
                />
                <Section 
                    title="Model X"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-x.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing invetory"
                />
                <Section 
                    title="Solar Panels"
                    description="Lowest Cost Solar Panels in America"
                    backgroundImg="solar-panel.jpg"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
                />
                <Section 
                    title="Solar Roof"
                    description="Produce Clean Energy From Your Roof"
                    backgroundImg="solar-roof.jpg"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
                />
                <Section 
                    title="Accessories"
                    description=""
                    backgroundImg="accessories.jpg"
                    leftBtnText="Shop Now"
                />
            </Container>
        </div>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`

