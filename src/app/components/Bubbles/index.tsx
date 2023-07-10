'use client'

import React, {useContext, useEffect, useState} from 'react';
import Bubble from './Bubble';
import { CounterContext } from '../Counter';
import './styles.scss';

export interface BubblesProps {
  children: React.ReactNode;
}

const Bubbles = (): JSX.Element => {

  const [allBubbles, setAllBubbles] = useState([undefined]);
  const {pageVisits} = useContext(CounterContext);

  useEffect(() => {
    const newArray: undefined[] = [...Array(pageVisits)];
    setAllBubbles(newArray);
  }, [pageVisits])
  
  return (
    <>
      {allBubbles.map((bubble, index) => (
        <Bubble key={`${index}-bubble`} />
      ))}
    </>   
  );
};

export default Bubbles;
