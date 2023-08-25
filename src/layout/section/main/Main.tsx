import React from 'react';
import styled from "styled-components";
import { Button } from '../../../components/Button';
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import img from '../../../assets/images/image-intro-desktop.jpg'
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <Icon iconId={'intro-left-desktop'} width={'195'} height={'504'}/>
            <Icon iconId={'intro-right-desktop'} width={'436'} height={'593'}/>
            <Container>
                <TextContent>
                    <Title>
                        Humanizing<br/> your insurance.
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
  position: relative;
  padding-top: 57px;
  
  svg:first-child{
    position: absolute;
    top: 75%;
  }
  
  svg:nth-child(2) {
    position: absolute;
    right: 0;
    top: -3%;
    z-index: 1;
    overflow: hidden;
  }
  
  
  
  ${Container} {
    display: flex;
    align-items: center;
    gap: 40px;
    
  }
  
`
const Title = styled.h1`
  font-size: 62px;
  color: ${theme.colors.fontDarkBg};
  font-weight: 400;
  line-height: 1;
  position: relative;
  
  &::before {
    content: '';
    display: inline-block;
    width: 150px;
    height: 1px;
    background-color: ${theme.colors.fontDarkBg};
    position: absolute;
    top: -50%;
  }
`

const Text = styled.p`
  color: ${theme.colors.fontDarkBg};
  line-height: 1.5;
  margin: 15px 0 25px;
`

const WrapperImg = styled.div`
  transform: translateY(20%);
`

const TextContent = styled.div`
  ${Button} {
    
    &:hover{
      background-color: ${theme.colors.fontDarkBg};
      color: ${theme.colors.fontSecondary};
    }
  }
`