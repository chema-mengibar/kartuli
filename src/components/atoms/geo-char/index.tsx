import React, {ReactElement} from 'react'

import { GeoLetterNames, geoAbc } from '../../../helpers/georgian/alphabet'

import {
 	GeoCharStyled,
} from "./geo-char.styles";

export enum CharSizes {
  small,
  medium,
  big
}

type GeoCharProps = {
  letter: GeoLetterNames;
  size?: CharSizes;
}

const GeoChar = ({letter, size }: GeoCharProps ): ReactElement => {

  return (
    <GeoCharStyled size={size}> {geoAbc[letter].letter} </GeoCharStyled>
  )
};

export default GeoChar