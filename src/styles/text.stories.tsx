import React, { ReactElement } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import {text} from "./text.styles";


const TextStories = styled.div`
  ${
    Object.entries(text).map( obj => `.${obj[0]}{ ${obj[1]} }`)
  }
`

const Div = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`

storiesOf('styles | Text', module).add(
  'all',
  (): ReactElement => <TextStories>
    {  
      Object
        .entries(text)
        .map( obj =>  
          <Div key={obj[0]} className={obj[0]}>{obj[0]}</Div>
        ) 
    }
  </TextStories>
);
