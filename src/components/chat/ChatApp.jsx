import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ChatBox from "./components/chat/ChatBox";
import MessageInput from "./components/chat/MessageInput";
import Nav from "./components/nav/nav";

import { push } from "./ox_db/log";

function ChatApp() {
    const [count, setCount] = useState(0);

    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (userMessage) => {
        const newMessages = [...messages, { sender: "user", text: userMessage }];
        setMessages(newMessages);

        // Simulate API call to ChatGPT
        const responseMessage = await db_handler(userMessage);
        setMessages([...newMessages, { sender: "bot", text: responseMessage }]);
    };

    const db_handler = async (message) => {
        // Simulate a call to the backend or ChatGPT API
        // Replace with actual API call
        pushData.data = message;

        const result = await push(pushData);
        return result;
    };

    return (
        <div>


            <div className="chat-app">
                <ChatBox messages={messages} />
                <MessageInput onSendMessage={handleSendMessage} />
            </div>


        </div>
    );
}

export default ChatApp;

