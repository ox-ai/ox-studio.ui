import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);

    // Adjust the textarea height based on the content
    e.target.style.height = 'auto'; // Reset the height
    e.target.style.height = e.target.scrollHeight + 'px'; // Set height to scrollHeight
  };

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
      document.querySelector('textarea').style.height = 'auto'; // Reset height
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className='input-box'>
      <div className="message-input">
        <textarea
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          style={{ height: 'auto' }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default MessageInput;
