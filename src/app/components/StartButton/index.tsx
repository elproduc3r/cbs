"use client"

import { useContext } from "react";
import { BackgroundContext } from "../Background";

const StartButton = () => {

  const {changeBackground} = useContext(BackgroundContext);
  return (
    <button
      onClick={changeBackground}
    >
      Get Started
    </button>
  )
}

export default StartButton;