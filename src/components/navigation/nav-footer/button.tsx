import React, {ReactElement, useState, useEffect} from 'react'

import {
  ButtonBoxStyled,
  Label,
} from "./button.styles";

export type ButtonBoxProps = {
  id?: string;
  label?: string;
  disabled?: boolean;
  onClick: Function;
  children?: React.ReactNode;
}

const ButtonBox = ({
  id,
  label,
  disabled= false,
  onClick,
  children
}:ButtonBoxProps): ReactElement => {

  const [animationClick, setAnimationClick] = useState(false);
  const [clickBlock, setClickBlock] = useState(false);

  useEffect( ()=>{
    if(animationClick){
      setTimeout(() =>{ setAnimationClick(false); }, 200); // same as animation
    }
  },[animationClick])
  
  useEffect( ()=>{
    if(clickBlock){
      onClick();
      setTimeout(() =>{ setClickBlock(false); }, 300);
    }
    return () => false;
  },[clickBlock])

  
  return (
    <ButtonBoxStyled
      id={id && `button-box_${id}`} 
      onClick={ ()=> {
        if( !clickBlock ){
          setAnimationClick(true);
          setClickBlock(true);
        }
      }}
      className = {
        [
         (disabled ? 'disabled' : ''),
          (animationClick ? 'animated-click': ''),
        ].join(' ')
      }
    >
      {children}
      {label && <Label>{label}</Label>}
    </ButtonBoxStyled>
  )
 };

export default ButtonBox