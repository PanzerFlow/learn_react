import { useRef, useEffect } from 'react'
import './ChatMessages.css'
import { ChatMessage } from './ChatMessage.jsx'

export function ChatMessages({chatMessages}){
  // hookss need to be at the top of the componet
  // works kind of like a event listener
  const chatMessagesRef = useRef(null);

  useEffect(()=>{
    const containerElem = chatMessagesRef.current
    if (containerElem){
      containerElem.scrollTop = containerElem.scrollHeight
    }
  },[chatMessages]); 

  return(
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage)=>{
          return(
            <ChatMessage 
              sender = {chatMessage.sender}
              message = {chatMessage.message}
              key={chatMessage.id}
            />
          )
        })
      }
    </div>
    )
}