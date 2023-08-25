import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const AboutUs = () => {
    return (
        <StyledAboutUs>
            <Container>
                <h2>Find out more about how we work</h2>
                <Button color={theme.colors.fontDarkBg}>how we work</Button>
                <Icon iconId={'how-we-work-desktop'} width={'434'} height={'250'}/>
            </Container>
            {/*p80-60*/}
        </StyledAboutUs>
    );
};

const StyledAboutUs = styled.section`
  margin-bottom: 150px;
  
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primary};
    padding: 63px 75px;

    position: relative;
    
    
    h2 {
      font-size: 62px;
      color: ${theme.colors.fontDarkBg};
      flex-basis: 550px;
      line-height: 1;
    }
    
    ${Button} {
      z-index: 1;
      &:hover {
        color: #2C2A2F;
        background-color: ${theme.colors.fontDarkBg};
      }
    }

    svg {
      position: absolute;
      
      top: 0;
      right: 0;
    }
  }
`
