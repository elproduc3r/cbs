'use client'

import React, {useState, useEffect, useContext} from 'react';
import { getPageVisits } from '../../utils/pageVisits';
import { CounterContext } from '../Counter';

export interface BubblesProps {
  children: React.ReactNode;
}

const Bubbles = (): JSX.Element => {

  const [visitCount, setVisitCount] = useState(1);
  const {pageVisits} = useContext(CounterContext);

  useEffect(() => {
    
    // setVisitCount(pageVisits);
  }, []);
  
  return (
    <div>
      Context: {pageVisits}
    </div>
  );
};

export default Bubbles;
