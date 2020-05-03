import styled, { css, keyframes  } from "styled-components";

import { SpinnerProps } from ".";

const color = '#8C6FF0';
const colorRight = '#5628EE';
const colorLeft = '#23C4F8';

const rotate = keyframes`
  50% { 
    transform: rotate(360deg);
    margin-left:0; }
  50.0001%, 100%{ margin-left: -60px; }
`

const move = keyframes`
  0%,50% { left: -8px; }
  25% { background: ${colorRight}; }
  75% { background: ${colorLeft}; }
  50.0001%,  100% {
    left: auto;
    right: -8px;
  }
`

const drop1 = keyframes`
  100% {
    transform: translate(32px, 8px) scale(0);
  }
`

const drop2 = keyframes`
  0% {
    transform: translate(0, 0) scale(.9);
  }
  100% {
    transform: translate(32px, -8px) scale(0);
  }
`


export const SpinnerStyled = styled.div<SpinnerProps>`
  width: 80px;
  height: 40px;
  position: relative;
  transform: scale(0.7);

  div,
  span {
    position: absolute;
  }


  div {
    top: 0;
    left: 50%;
    width: 60px;
    height: 60px;
    animation: ${rotate} 6.9s linear infinite;

    span {
      left: -8px;
      top: 50%;
      margin: -8px 0 0 0;
      width: 16px;
      height: 16px;
      display: block;
      background: ${color};
      box-shadow: 2px 2px 8px rgba(color, .09);
      border-radius: 50%;
      transform: rotate(90deg);
      animation: ${move} 6.9s linear infinite;

      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background: inherit;
        top: 50%;
        left: 50%;
        margin: -7px 0 0 -7px;
        box-shadow: inherit;
      }

      &:before {
          animation: ${drop1} .8s linear infinite;
      }

      &:after {
          animation: ${drop2} .8s linear infinite .4s;
      }
    }

    &:nth-child(2) {
      animation-delay: -2.3s;
      span {
        animation-delay: -2.3s;
      }
    }

    &:nth-child(3) {
      animation-delay: -4.6s;
      span {
        animation-delay: -4.6s;
      }
    }
  }

`;