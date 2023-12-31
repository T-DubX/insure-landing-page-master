import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./menu/Menu";
import {Button} from "../../components/Button";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";


const menuItems = ['howe we work', 'blog', 'account']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <Menu menuItem={menuItems}/>
                <Button color={theme.colors.fontSecondary}>view plans</Button>
            </Container>
        </StyledHeader>
    )
};


const StyledHeader = styled.header`
  padding: .6rem 0;
  position: absolute;
  background-color: #fff;
  right: 0;
  left: 0;
  top: 0;
  z-index: 5;
  
  ${Container} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    a {
      margin-right: auto;
    }
    
    ${Button}:hover {
      background-color: ${theme.colors.hover};
      color: ${theme.colors.fontDarkBg};
    }
  }
  
  
  
`