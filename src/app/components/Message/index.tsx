import React from 'react';
import StartButton from '../StartButton';
import "./styles.scss";

export interface MessageType {
  children: React.ReactNode;
};

const Message = (): JSX.Element => {
  return (
    <div className="message-container">
      Watch live
      <br />
      CBS Sports
      <StartButton />
    </div>
  );
};

export default Message;
