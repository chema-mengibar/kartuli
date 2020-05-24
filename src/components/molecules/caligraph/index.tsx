import React, {ReactElement} from 'react'

import { GeoLetterNames } from '../../../helpers/georgian/alphabet'
import GeoChar, {CharSizes} from '../../atoms/geo-char'

import {
   CaligraphStyled,
   Canvas,
   Bar,
   Letter,
} from "./caligraph.styles";


export interface CaligraphProps {
  letter: GeoLetterNames 
}


const Caligraph = ( {letter}:CaligraphProps): ReactElement => {
  return (
    <CaligraphStyled>
      <Canvas>
        <Bar />
        <Bar className="base"/>
        <Bar />
      </Canvas>
      <Letter>
        <GeoChar size={CharSizes.big} letter={letter}></GeoChar>
      </Letter>
    </CaligraphStyled>
  )
 };

export default Caligraph