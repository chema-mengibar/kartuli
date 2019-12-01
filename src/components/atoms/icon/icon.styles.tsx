import styled, {css} from "styled-components";

export const IconStyled = styled.div<{size: number}>`
  width:${({size})=> size}px;
  height:${({size})=> size}px;
`;

export const PathStyled = styled.path`
  fill: ${({color})=> color};
` ;

export const RectStyled = styled.rect<{
  fillcolor?: string, 
}>`
  ${({fillcolor})=> 
    fillcolor && css`
      fill: ${fillcolor};
    `
  };
` ;