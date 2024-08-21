import React from 'react';
import './ChatBox.css';
import DisplayObject from "../display/res";

const ChatBox = ({ messages }) => {
  const isBlackBackground = messages[0] ;

  return (
    <div className={`chat-box ${!isBlackBackground ? 'black-background' : '#1a1a1a'}`}>
    
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
