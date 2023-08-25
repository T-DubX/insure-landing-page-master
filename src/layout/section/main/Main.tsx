import React from 'react';
import styled from "styled-components";
import { Button } from '../../../components/Button';
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import img from '../../../assets/images/image-intro-desktop.jpg'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <TextContent>
                    <Title>
                        Humanizing your insurance.
                    </Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti dicta eligendi esse, in ipsa mollitia nisi nostrum provident quaerat quo quod sint? Aliquid aperiam consequatur, exercitationem laborum praesentium recusandae.
                    </Text>
                    <Button color={theme.colors.fontDarkBg}>view plans</Button>

                </TextContent>

                <WrapperImg>
                    <img src={img} alt=""/>
                </WrapperImg>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: ${theme.colors.primary};
  max-height: 50%;
  
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
`
const Title = styled.h1`

`

const Text = styled.p`
  
`

const WrapperImg = styled.div`
  transform: translateY(25%);
`

const TextContent = styled.div`
  
`