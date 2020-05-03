import styled, { css } from "styled-components";

import { ExamLettersProps } from ".";

export const ExamLettersStyled = styled.div<ExamLettersProps>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;