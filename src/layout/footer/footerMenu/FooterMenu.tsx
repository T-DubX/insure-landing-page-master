import React from 'react';
import styled from "styled-components";

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
  
`

const Title = styled.h4`
  font-size: 16px;
`

const MenuList = styled.ul`

`

const MenuItem = styled.li`

`

const Link = styled.a`
  
`
