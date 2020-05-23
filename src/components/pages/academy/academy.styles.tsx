import styled, { css } from "styled-components";

import {LessonCardContainer} from "../../molecules/lesson-card/lesson-card.styles";

import { pageTitleCss, pageSubTitleCss } from '../../../styles/new.text.styles'
import { theme } from '../../../styles/theme.styles'



export const Title = styled.div`
  ${pageTitleCss}
`;


export const BlockTitle = styled.div`
  ${pageSubTitleCss};
`;

export const LessonCardContainerSt = styled(LessonCardContainer)`

`;