import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type AdvantagePropsType = {
    icon: string
    title: string
    text: string
}

export const Advantage = (props: AdvantagePropsType) => {
    return (
        <StyledAdvantage>
            <Icon iconId={props.icon} height={'86'} width={'86'}/>
            <AdvantageTitle>
                {props.title}
            </AdvantageTitle>
            <AdvantageText>
                {props.text}
            </AdvantageText>
        </StyledAdvantage>
    );
};

const StyledAdvantage = styled.div`

`

const AdvantageTitle = styled.h3`
    
`

const AdvantageText = styled.p`
  color: ${theme.colors.fontPrimary};
`
