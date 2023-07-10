'use client'

import {useState, useEffect} from 'react';
import { getRandomNum } from '../../utils/getRandomNumber';

const Bubble = (): JSX.Element => {

  const [styles, setStyles] = useState({});
  const size = getRandomNum(50, 300);

  useEffect(() => {
    const left = getRandomNum(0, window.innerWidth - size);
    const top = getRandomNum(0, window.innerHeight - size);
    setStyles({
      width: `${size}px`,
      height: `${size}px`,
      top,
      left
    });
  }, []);

  return (
    <span className="bubble" style={styles} aria-hidden="true">bubble</span>
  )
};

export default Bubble;