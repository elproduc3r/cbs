'use client'

import React, {useEffect, useState} from 'react';
import { CounterContext } from './CounterContext';
import { initializePageVisits } from '../../utils/pageVisits';

export interface CounterProps {
  children: React.ReactNode;
};

const Counter = ({
  children
}: CounterProps): JSX.Element => {
  const [pageVisits , setPageVisits] = useState(1);
  useEffect(() => {
    const pageVisits = initializePageVisits();
    setPageVisits(pageVisits);
  }, []);

  return (
    <CounterContext.Provider value={{pageVisits}}>
      {children}
    </CounterContext.Provider>
  )
};

export default Counter;
export {CounterContext};