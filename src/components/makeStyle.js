/* eslint-disable  */
import React, { useState, useContext } from 'react';

import { LatitudeThemeContext } from './Theming/theme';


const useStyle = () => {
  const latitudeCtx = useContext(LatitudeThemeContext);

  return {
    ...latitudeCtx,
  };
};


function makeStyle() {
  const theming = useStyle();
}

export default makeStyle;
