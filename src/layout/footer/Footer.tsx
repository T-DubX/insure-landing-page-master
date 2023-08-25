import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import { FooterMenu } from './footerMenu/FooterMenu';

const ourCompany = ['how we work', 'why insure?', 'view plans', 'reviews'];

const helpMe = ['faq', 'terms of use', 'privacy policy', 'cookes'];

const contact = ['sales', 'support', 'live chat'];

const others = ['careers', 'press' , 'licenses']


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper>
                    <LogoWrapper>
                        <Logo/>
                    </LogoWrapper>
                    <Social>
                        <Icon iconId={'facebook'} width={'24'} height={'24'}/>
                        <Icon iconId={'twitter'} width={'24'} height={'24'}/>
                        <Icon iconId={'pinterest'} width={'24'} height={'24'}/>
                        <Icon iconId={'instagram'} width={'24'} height={'24'}/>
                    </Social>
                </FlexWrapper>
                <Splitter/>
                <FlexWrapper>
                    <FooterMenu title={'our company'} menuItem={ourCompany}/>
                    <FooterMenu title={'help me'} menuItem={helpMe}/>
                    <FooterMenu title={'contact'} menuItem={contact}/>
                    <FooterMenu title={'others'} menuItem={others}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #FAFAFA;
  
  ${Container} {
    padding: 0;
  }
`

const LogoWrapper = styled.div`

`

const Splitter = styled.div`

`

const Social = styled.div`

`
