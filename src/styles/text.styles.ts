import { css } from "styled-components";

const small = css`
  font-size: 12px;
  line-height: 16px;
`

const medium = css`
  font-size: 18px;
  line-height: 23px;
`

const normal = css`
  font-size: 20px;
  line-height: 20px;
`

const big = css`
  font-size: 24px;
  line-height: 31px;
`

const large = css`
  font-size: 36px;
  line-height: 47px;
`

export const text = {
  'quiz':css`
    ${large}
  `,
  'P':css`
    ${medium}
  `,
  'cardTitle':css`
    ${medium}
  `,
  'cardDescription':css`
    ${small}
  `,
  'cardProgress':css`
    ${small}
  `,
  'breadcrumb':css`
    font-size: 14px;
    line-height: 18px;
    transform: uppercase;
  `,
  'buttonLabelSmall':css`
    font-size: 14px;
    line-height: auto;
    text-align: center;
  `,

  'buttonLabelBig':css`
    font-size: 16px;
    line-height: auto;
    text-align: center;
  `,

  'headerNavLabel':css`
    ${big}
  `,
  'pron':css`
    ${medium}
  `,
  'quizBig':css`
    font-size: 48px;
    line-height: 62px;
    text-align: center;
  `,
  'vocabularyWord':css`
    ${large}
    text-align: center;
  `,
  'listTitle':css`
    ${big}
  `,
  'listItems':css`
    font-size: 18px;
    line-height: 30px;
  `,
  'buttonActionLabel':css`
    ${big}
    text-align: center;
  `,
  'buttonOptionLabel':css`
    ${normal}
    text-align: center;
  `,
  'butonSectionLabel':css`
    ${big}
  `,
  'dialogPhrase':css`
    font-size: 26px;
    line-height: 34px;
  `,
  'dialogPron':css`
    ${medium}
  `,  
}