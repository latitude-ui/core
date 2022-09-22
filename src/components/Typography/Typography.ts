import React, { createElement } from 'react';


type headlines = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type p = 'body1' |'body2';


export interface TypographyProps {
    type: headlines | p;
    children: string;
}


const Headline = (props: {
    children: string;
    type: headlines;
}) => {
  const {type, children: textField} = props;

 return React.createElement(type, {}, textField);
};


const Typography = (props: TypographyProps) => {
  const { type, children } = props;

  let Typo = null;

  switch (type) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      Typo = Headline;
      break;
    default:
      throw new Error('something went wrong');
  }

  /* eslint-disable */
  return createElement(Typo, { children, type });
};

export default Typography;
