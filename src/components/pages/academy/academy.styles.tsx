import styled, { css } from "styled-components";

import bl from '../../../styles/baseline'
import { theme } from '../../../styles/theme.styles'
import {LessonCardContainer} from "../../molecules/lesson-card/lesson-card.styles";
import { pageTitleCss, pageSubTitleCss } from '../../../styles/new.text.styles'


export const Title = styled.div`
  ${pageTitleCss}
  color: ${ theme.colors.text._};
`;


export const BlockTitle = styled.div`
  ${pageSubTitleCss};
  color: ${ theme.colors.text._};
  margin: ${bl._} 0 ${bl._d2}; // @todo: move to global layout style
`;

export const LessonCardContainerSt = styled(LessonCardContainer)` //@todo: remove this

`;