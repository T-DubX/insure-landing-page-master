import React from 'react';
import styled from "styled-components";
import { theme } from '../../../styles/Theme';

type MenuPropsType = {
    menuItem: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <MenuList>
                {
                    props.menuItem.map((item, index) => (
                        <MenuItem>
                            <Link key={index}>{item}</Link>
                        </MenuItem>
                    ))
                }
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
`

const MenuList = styled.ul`
  display: flex;
`

const MenuItem = styled.li`
  margin-right: 20px;
`

const Link = styled.a`
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 700;
  
  &:hover {
    color: ${theme.colors.hover}
  }
`
