import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';
export function ChatMessage({message,sender,time}){
    /*
    const{message , sender} = props;
    if(sender === "robot"){
        return(
        <div >
            <img src="./img/robot.png" alt="Robot" width = "50"/>  
            <span >{message} </span>
        </div>
        );
    }
    */
    return(
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'} >
            {sender === "robot" && <img src={RobotProfileImage} alt="Robot" width = "50"/>}
            <div className="chat-message-text">
                {message}<br/> <span className="chat-message-time">
                {time}</span>
                </div>
            {sender === "user" && <img src={UserProfileImage} alt="UserProfile" className="chat-message-profile"/> }
        </div>
    );
    }