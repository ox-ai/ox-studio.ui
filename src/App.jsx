import { useState } from "react";

import "./App.css";

import ChatBox from "./components/chat/ChatBox";
import MessageInput from "./components/chat/MessageInput";
import Nav from "./components/nav/nav";
import VNav from "./components/vnav/VNav";

import { api_post } from "./ox_db/log";

function App() {
  

  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (userMessage) => {
    const newMessages = [...messages, { sender: "user", text: userMessage }];
    setMessages(newMessages);

    // Simulate API call to ChatGPT
    const responseMessage = await db_handler(userMessage);
    setMessages([...newMessages, { sender: "bot", text:responseMessage.head ,res:responseMessage.res }]);
  };

  const db_handler = async (message) => {
    // Simulate a call to the backend or ChatGPT API
    // Replace with actual API call
  

    const result = await api_post(message);
    return result;
  };

  return (
    <>
      <div>
      
          <Nav />
          <VNav/>
        
        <div>
          <div className="chat-app">
            <ChatBox messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  },
  component: {
    width: "45%",
    padding: "10px",
    boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  left: {
    backgroundColor: "#f9f9f9",
  },
  right: {
    backgroundColor: "#e9e9e9",
  },
};
