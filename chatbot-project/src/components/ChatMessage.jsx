import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) { //shortcut
  return (
    <div className={
      sender === "robot" 
      ? "chat-messages-robot" 
      : "chat-messages-user"
      }
    >
      {sender === "robot" && (
        <img className="chat-message-profile" src={RobotProfileImage} />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && (
        <img className="chat-message-profile" src={UserProfileImage} />
      )}
    </div>
  )
}