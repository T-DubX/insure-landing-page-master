import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
    color: string
}
export const Button = styled.button<ButtonPropsType>`
  padding: .5rem 1.5rem;
  text-transform: uppercase;
  color: ${props => props.color || theme.colors.fontDarkBg};
  border: 2px solid ${props => props.color || theme.colors.fontDarkBg};
  font-weight: 700;
`