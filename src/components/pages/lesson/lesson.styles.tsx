import styled, { css } from "styled-components";

import { LessonProps } from ".";

export const LessonStyled = styled.div<LessonProps>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;