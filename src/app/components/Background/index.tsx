"use client"

import React, {createContext, useState, MouseEventHandler} from 'react';
import getRandomColors from '../../utils/getRandomColors';
export interface BackgroundProps {
  children: React.ReactNode;
};

interface BackgroundContextType {
  changeBackground: MouseEventHandler<HTMLButtonElement>;
}

export const BackgroundContext = createContext<BackgroundContextType>({
  changeBackground: () => {}
});

const Background = ({
  children
}: BackgroundProps):JSX.Element => {
  const [colors, setColors] = useState(["#1d6dd5", "#d529cc"]);
  const changeBackground = (): void => {
    const newColors = getRandomColors(2);
    setColors(newColors);
  };

  /**
   *  Using style obj here instead of styled-component because
   *  it was rendering without any styles. This way SSR rendering
   *  happens with these default styles.
   */
  const styles = {
    'backgroundImage': `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`,
    "height": '100vh',
    'overflow': 'auto'
  }

  return (
    <BackgroundContext.Provider value={{changeBackground}}>
      <div style={styles}>
        {children}
      </div>
    </BackgroundContext.Provider>
  );
};

export default Background;
