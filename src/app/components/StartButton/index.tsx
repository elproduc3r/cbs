'use client'

import { useContext } from 'react';
import { BackgroundContext } from '../Background';
import './styles.scss';

const StartButton = () => {
  const {changeBackground} = useContext(BackgroundContext);
  return (
    <button
      className="start-button"
      onClick={changeBackground}
    >
      Get Started
    </button>
  )
};

export default StartButton;
