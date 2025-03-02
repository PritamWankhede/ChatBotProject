import React from 'react';

function InputField({ question, setQuestion, onSend }) {
  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(question);
  };

  return (
    <div className="input-field">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ask a question..." 
          value={question} 
          onChange={handleChange} 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default InputField;
