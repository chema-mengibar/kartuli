import React, {ReactElement} from 'react'

import {
 	ExamLettersStyled,
} from "./exam-letters.styles";
import { geoAbc, GeoLetterNames } from '../../../helpers/georgian/alphabet'
import Caligraph from '../../molecules/caligraph';

export interface ExamLettersProps {
  id?: string;
}


const ExamLetters = (props:ExamLettersProps): ReactElement => {
  return (
    <ExamLettersStyled>

      Id: {props.id}
      Exam leters 

      <div>
        <Caligraph letter="oni" />

        
      </div>

    </ExamLettersStyled>
  )
 };

export default ExamLetters