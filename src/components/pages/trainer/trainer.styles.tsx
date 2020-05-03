import styled, { css } from "styled-components";

import { TrainerProps } from ".";

export const TrainerStyled = styled.div<TrainerProps>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;