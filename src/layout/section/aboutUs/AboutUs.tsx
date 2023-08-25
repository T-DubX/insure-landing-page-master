import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

export const AboutUs = () => {
    return (
        <StyledAboutUs>
            <Container>
                <h2>Find out more about how we work</h2>
                <Button color={theme.colors.fontDarkBg}>how we work</Button>
            </Container>
            {/*p80-60*/}
        </StyledAboutUs>
    );
};

const StyledAboutUs = styled.section`
  
`
