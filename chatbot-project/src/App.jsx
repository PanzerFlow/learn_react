import { useState} from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessages } from './components/ChatMessages.jsx'
import './App.css'

function App(){
  // here we are lifting the state up and sharing the stat using props
  const [chatMessages,setChatMessages] = useState([
    {
          sender:"user",
          message:"Hello chatbot",
          id:"id1",
    },
    {
          sender:"robot",
          message:"Ola" ,
          id:"id2",
    },
    {
          sender:"user",
          message:"what day is today" ,
          id:"id3",
    },
    {
          sender:"robot",
          message:"idk" ,
          id:"id4",
    },        
  ]);
  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  );
}

export default App
