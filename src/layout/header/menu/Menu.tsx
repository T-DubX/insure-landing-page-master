import React from 'react';
import styled from "styled-components";

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

`

const MenuItem = styled.li`

`

const Link = styled.a`
  
`
