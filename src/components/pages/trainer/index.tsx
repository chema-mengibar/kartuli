import React, {ReactElement} from 'react'

import ExamLetters from '../../organisms/exam-letters';

import {
 	TrainerStyled,
} from "./trainer.styles";



export interface TrainerProps {
  id?: string;
  location?: any;
  match?: any;
}


const Trainer = (props:TrainerProps): ReactElement => {

  // console.log( 'PROPS', props.location )
  const lessonId = props.match.params.lessonId
  
  return (
    <TrainerStyled>

      Id: {props.id}

      <ExamLetters />

    </TrainerStyled>
  )
 };

export default Trainer