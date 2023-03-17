import { createContext, useState } from 'react';

export const FontContext = createContext(null);

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('Sans-Serif');
  const [showFont, setShowFont] = useState(false);

  const showFontHandler = () => {
    setShowFont((prevState) => !prevState);
  };

  const sansToggle = () => {
    setFont('Sans-Serif');
    setShowFont(false);
  };

  const serifToggle = () => {
    setFont('Serif');
    setShowFont(false);
  };

  const monoToggle = () => {
    setFont('Mono');
    setShowFont(false);
  };

  return (
    <FontContext.Provider
      value={{
        showFont,
        showFontHandler,
        font,
        sansToggle,
        serifToggle,
        monoToggle,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};
