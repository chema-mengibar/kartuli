import styled, { css } from "styled-components";

import { RegionMainProps } from ".";

export const RegionMainStyled = styled.div<RegionMainProps>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;