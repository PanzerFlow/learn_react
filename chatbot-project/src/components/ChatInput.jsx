import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages,setChatMessages}) {
  const[inputText,setInputText] = useState("")

  function saveInputText(event){
    setInputText(event.target.value)
  }

  function sendMessage(){
    const newChatMessages = [
        ...chatMessages, 
        {
              sender:"user",
              message:inputText,
              id: crypto.randomUUID(),
        },
      ]
    setChatMessages(newChatMessages)
    
    const chatBotReponse = Chatbot.getResponse(inputText);
    setChatMessages([
        ...newChatMessages, 
        {
              sender:"robot",
              message:chatBotReponse,
              id: crypto.randomUUID(),
        },
      ])
    
    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button
      className="send-button"
      onClick={sendMessage}
      > Send </button>
    </div>
  )
}