import styled, {css} from "styled-components";

import {size, device} from '~/utils/media'

export const Container = styled.div`

  width:100%;
  margin:0 auto;
  padding: 0 20px;

  ${device.tablet(css`
    max-width: ${size.tablet}px;
  `)} 

  ${device.desktop(css`
    padding: 0;
  `)} 
`
