/* eslint-disable  */
import React, { useState, useContext } from 'react';

import { LatitudeThemeContext } from './Theming/theme';


const useStyle = () => {
  const lateituteCtx = useContext(LatitudeThemeContext);

  return {
    ...lateituteCtx,
  };
};


function makeStyle() {
  const theming = useStyle();

  console.log(theming);
}

export default makeStyle;
