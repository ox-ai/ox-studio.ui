import React from 'react';
import './ChatBox.css';

import DisplayObject from "../display/res"

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box">
      {messages[0] ? null: <p>studio init</p>}
      <div className="messages">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {message.text}
          {message.res ? <DisplayObject data={message.res} /> : null}
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default ChatBox;
