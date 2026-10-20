import { useRef  , useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';
const ChatMessages = ({chatMessages}) =>{
        const chatMessageRef = useRef(null);
        useEffect( ()=>{
            const containerElem = chatMessageRef.current;
            containerElem.scrollTop = containerElem.scrollHeight;
        },[chatMessages]);
        return (
            <div className="chat-messages-container" ref={chatMessageRef}>
                {/* when we insert a array in jsx react display it  */}
                {chatMessages.map((chatMessage) =>{
                    return(
                    <ChatMessage message = {chatMessage.message}
                    sender = {chatMessage.sender}
                    time = {chatMessage.time}
                    key={chatMessage.id}  />
                    );
                })
                }
            </div>
        );
    }
export default ChatMessages;