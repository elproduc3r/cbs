"use client"

import React, {createContext, useState, MouseEventHandler} from 'react';
import styled,  { StyleSheetManager } from "styled-components";
import isPropValid from '@emotion/is-prop-valid';
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

interface StyledBackgroundProps {
  colors: string[];
};

const StyledBackground = styled.div<StyledBackgroundProps>`
  background-image: linear-gradient(to bottom right, 
    ${(props:StyledBackgroundProps) => props.colors[0]}, ${(props:StyledBackgroundProps) => props.colors[1]});
  height: 100vh;
`;

const Background = ({
  children
}: BackgroundProps):JSX.Element => {

  const [colors, setColors] = useState(["#1d6dd5", "#d529cc"]);
  const changeBackground = (): void => {

    const newColors = getRandomColors(2);
    setColors(newColors);
  };

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <BackgroundContext.Provider value={{changeBackground}}>
        <StyledBackground colors={colors}>
          {children}
        </StyledBackground>
      </BackgroundContext.Provider>
    </StyleSheetManager>
  );
};

export default Background;
