import styled, { css } from "styled-components";

import { h2Css } from "~/styles/theme/fonts-skins.styles";


// import bl from '../../../styles/baseline'
// import { theme } from '../../../styles/theme.styles'
// import {LessonCardContainer} from "../../molecules/lesson-card/lesson-card.styles";
// import { pageTitleCss, pageSubTitleCss } from '../../../styles/new.text.styles'


export const Title = styled.div(({theme}) => css`
  color: ${ theme.props.color.text._ };
  ${h2Css}
`);


export const BlockTitle = styled.div`
  color: black;
  // todo: baseline
`;


  /* margin: ${bl._} 0 ${bl._d2};  */