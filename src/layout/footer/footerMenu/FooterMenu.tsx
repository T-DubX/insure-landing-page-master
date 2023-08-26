import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type FooterMenuPropsType = {
    title: string
    menuItem: Array<string>
}

export const FooterMenu = (props: FooterMenuPropsType) => {
    return (
        <StyledFooterMenu>
            <Title>{props.title}</Title>
            <MenuList>
                {
                    props.menuItem.map((item, index) => (
                        <MenuItem>
                            <Link key={index}>
                                {item}
                            </Link>
                        </MenuItem>
                    ))
                }
            </MenuList>
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav`
  z-index: 1;
  & + & {
    margin-left: 250px;
  }
`

const Title = styled.h4`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 35px;
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MenuItem = styled.li`
  
`

const Link = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme.colors.fontSecondary};
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`
