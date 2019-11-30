import styled from "styled-components";

export const IconStyled = styled.div<{size: number}>`
  width:${({size})=> size}px;
  height:${({size})=> size}px;
`;

export const PathStyled = styled.path`
  fill: ${({color})=> color};
` ;