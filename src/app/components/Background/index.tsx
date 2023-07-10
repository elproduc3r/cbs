'use client'

import React, {createContext, useState, MouseEventHandler, useEffect} from 'react';
import getRandomColors from '../../utils/getRandomColors';
import classnames from 'classnames';
import './styles.scss';
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
}: BackgroundProps): JSX.Element => {
  const [colors, setColors] = useState(["#1d6dd5", "#d529cc"]);
  const [animationClassName, setAnimationClassName] = useState('');

  const changeBackground = (): void => {
    const newColors = getRandomColors(2);
    setColors(newColors);
    setAnimationClassName("animation");
  };

  useEffect(() => {
    if(animationClassName === "animation") {
      setTimeout(() => {
        setAnimationClassName("");
      }, 1000);
    }
  }, [animationClassName]);

  /**
   *  Using style obj here instead of styled-component because
   *  it was rendering without any styles. This way SSR rendering
   *  happens with these default styles. Also, I have added all 
   *  styles here so they are all in 1 place and easier to manage.
   */
  const styles = {
    'backgroundImage': `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`,
  };

  return (
    <BackgroundContext.Provider value={{changeBackground}}>

        <div className={'background-container'}>
          {children}
        </div>
        <div
          className={classnames('background-gradient', animationClassName)}
          style={styles}
        >
        </div>
    </BackgroundContext.Provider>
  );
};

export default Background;
