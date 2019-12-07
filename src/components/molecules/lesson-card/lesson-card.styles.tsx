import styled from "styled-components";

import {theme} from '../../../styles/theme.styles'
import {text} from '../../../styles/text.styles'

export const LessonCardStyled = styled.div`
  width: 215px;
  min-width: 215px;
  height: 245px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  overflow: hidden;
`;


const imageHeight = 110;

export const Image = styled.div`
  width:100%;
  height: ${imageHeight}px;
  background-color: #aaa;
`

export const Content = styled.div`
  padding: 20px 20px 5px;
  display: flex;
  flex-direction: column;
  height: calc( 100% - ${imageHeight}px );
  justify-content: space-evenly;
  color: ${ theme.colors.text._}
`

export const Title = styled.div`
  ${text.cardTitle}
  margin-bottom:10px;
`

export const Description = styled.div`
  ${text.cardDescription}
`

export const Progress = styled.div`
  ${text.cardProgress}
  color: ${ theme.colors.base.d1}
`



const cardsMargin = 5;

export const LessonCardContainer = styled.div`
  display: flex;
  > *:not(:first-child):not(:last-child){
    margin: 0 ${cardsMargin}px;
  }

  > *:first-child{
    margin-right: ${cardsMargin}px;
  }

  > *:last-child{
    margin-left: ${cardsMargin}px;
  }

  /* transform: scale(.8); */
`;
