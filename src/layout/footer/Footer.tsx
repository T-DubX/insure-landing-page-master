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
                <Icon className={'bg'}  iconId={'bg-footer-desktop'} width={'528'} height={'231'}/>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <LogoWrapper>
                        <Logo/>
                    </LogoWrapper>
                    <Social>
                        <Icon iconId={'facebook'} width={'24'} height={'24'}/>
                        <Icon iconId={'twitter'} width={'24'} height={'20'}/>
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
    padding: 60px 0;
    position: relative;
    
    .bg {
      position: absolute;
      top: 0;
      left: -11%;
    }
  }
`

const LogoWrapper = styled.div`
  z-index: 1;
`

const Splitter = styled.div`
  height: 1px;
  background-color: #c5c5c5;
  margin: 35px 0 50px;
`

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    cursor: pointer;
    fill: #837D88;
  }
  
  & svg:hover {
    fill: #000;
  }
`
