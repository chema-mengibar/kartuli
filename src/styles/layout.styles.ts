import styled, {css} from "styled-components";

import {size, device} from '../helpers/media'

export const Container = styled.div`

  border: 1px solid gray;
  width:100%;
  margin:0 auto;

  ${device.tablet(css`
    max-width: ${size.tablet}px;
  `)} 
 
`
