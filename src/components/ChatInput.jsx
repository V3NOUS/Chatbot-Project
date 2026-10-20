import { useState } from 'react';
import {Chatbot} from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';
export function ChatInput({chatMessages,setChatMessages}){
        const [inputText,setInputText] = useState('');
        function saveInputText(event){
            setInputText(event.target.value);
        }
        function sendMessage(){
            const time = dayjs().valueOf();
            if(inputText === "") return;
            const newChatMessage = [...chatMessages,{
                message:inputText,
                sender : 'user',
                id : crypto.randomUUID(),
                time : dayjs(time).format('HH:mma')
            }]
            setChatMessages(newChatMessage);
            const response = Chatbot.getResponse(inputText);
            const robotTime = dayjs().valueOf();
            setChatMessages([...newChatMessage,{
                message:response,
                sender : 'robot',
                id : crypto.randomUUID(),
                time : dayjs(robotTime).format('HH:mma')
            }])
            
            setInputText('');
        }
        function clearAll(){
            setChatMessages([]);
            localStorage.clear();
        }
        return(
                <div className="chat-input-container">
                    <input 
                    placeholder="Send message to chatbot"
                    size="30"
                    onChange={saveInputText}
                    value={inputText}
                    className="chat-input"
                    />
                    <button onClick={sendMessage} className="send-button">Send</button>   
                    <button onClick={clearAll} className='clear-button'>Clear</button> 
                </div>
        );
    }