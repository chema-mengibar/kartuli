import styled, { css } from "styled-components";


export const LogoStyled = styled.div<{size:number}>`
  width:${({size})=> size}px;
`;

export const PathStyled = styled.path`
  fill: ${({color})=> color};
` ;

  // width:${({size})=> size}px;
  // height:${({size})=> size}px;