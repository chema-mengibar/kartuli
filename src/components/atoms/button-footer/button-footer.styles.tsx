import styled, { css } from "styled-components";

import { ButtonFooterProps } from ".";

export const ButtonFooterStyled = styled.div<ButtonFooterProps>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;