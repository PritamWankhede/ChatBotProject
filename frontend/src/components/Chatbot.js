import React, { useState } from 'react';
import InputField from './InputField';
import Message from './Message';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");

  const handleUserMessage = async (question) => {
    setMessages([...messages, { sender: "user", text: question }]);
    setQuestion("");
    
    const response = await fetch(`http://localhost:5000/api/segment/how-to?question=${question}`);
    const data = await response.json();
    
    setMessages([...messages, { sender: "user", text: question }, { sender: "chatbot", text: data.answer }]);
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} text={message.text} />
        ))}
      </div>
      <InputField question={question} setQuestion={setQuestion} onSend={handleUserMessage} />
    </div>
  );
}

export default Chatbot;
