import styled, { css } from "styled-components";

import { MenuProps } from ".";

export const MenuStyled = styled.div<MenuProps>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;