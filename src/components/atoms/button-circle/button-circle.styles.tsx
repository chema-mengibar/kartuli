import styled, { css } from "styled-components";

import { ButtonCircleProps } from ".";

export const ButtonCircleStyled = styled.div<ButtonCircleProps>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;