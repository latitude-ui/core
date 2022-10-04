/* eslint-disable  */
import React, { createContext, useState } from 'react';

const LatitudeThemeContext = createContext({
  theme: {
    palette: {
      primary: 'black',
      secondary: 'white',
    },
  },
});

const LatitudeThemeConsumer = LatitudeThemeContext.Consumer;

const LatitudeThemeProvider = ({children, theme: initialThemeState }) => {
  const [theme, setTheme] = useState(initialThemeState ?? {});
  return (
    <LatitudeThemeContext.Provider value={{
      theme,
    }}>
      { children }
    </LatitudeThemeContext.Provider>
  );
};


export { LatitudeThemeConsumer, LatitudeThemeContext};
export default LatitudeThemeProvider;
