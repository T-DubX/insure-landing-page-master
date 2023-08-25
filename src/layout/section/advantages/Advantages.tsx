import React from 'react';
import styled from "styled-components";
import {Advantage} from './advantage/Advantage';
import {Container} from "../../../components/Container";

export const Advantages = () => {
    return (
        <StyledAdvantages>
            <Container>
                <Title>
                    We're different
                </Title>
                <WrapperAdvantages>
                    <Advantage icon={'snappy-process'} title={'snappy process'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate facilis harum impedit nam quaerat, quibusdam repellendus velit? Alias, deserunt, rem?'}/>
                    <Advantage icon={'price'} title={'affordable prices'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate facilis harum impedit nam quaerat, quibusdam repellendus velit? Alias, deserunt, rem?'}/>
                    <Advantage icon={'people'} title={'people first'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate facilis harum impedit nam quaerat, quibusdam repellendus velit? Alias, deserunt, rem?'}/>
                </WrapperAdvantages>
            </Container>
        </StyledAdvantages>
    );
};

const StyledAdvantages = styled.section`
  color: #2C2A2F;
`

const WrapperAdvantages = styled.div`

`

const Title = styled.h2`
  font-size: 62px;
  font-weight: 400;
  margin-bottom: 100px;
`