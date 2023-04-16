import React, { useState } from 'react';

const DarkModeContext = React.createContext({
  isDark: false,
  darkModeHandler: () => {},
});

export const DarkModeProvider = (props) => {
  const [isDark, setIsDark] = useState(false);
  const darkModeHandler = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider
      value={{ isDark: isDark, darkModeHandler: darkModeHandler }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeContext;
