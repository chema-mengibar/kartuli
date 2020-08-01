import styled, {css} from "styled-components";

export const IconStyled = styled.div
<{size: number, theme: any}>
(( {theme, size}) => css`

  width:${ size }px;
  height:${ size }px;

  &.themed{
    ${PathStyled}{
      fill: ${ theme.props.color.primary._ };
    }
  }
`);

export const PathStyled = styled.path`
  fill: ${({color})=> color};
`;

export const RectStyled = styled.rect<{
  fillcolor?: string, 
}>`
  ${({fillcolor})=> 
    fillcolor && css`
      fill: ${fillcolor};
    `
  };
` ;

/*
 svg{
    path{
      fill: ${ theme.props.color.primary._ }; 
    }
  }
*/