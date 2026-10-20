import { useState ,useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './App.css';

    // vaghti baraye voroodi migim {} yani az avalin voroodi miad in karo anjam mide ke avalin voroodi props hastesh
    
function App(){
        useEffect(() =>{
            Chatbot.addResponses({
                "GoodBye" : "Goodbye Have a nice day.",
                "give me a unique id " : () => `Sure Here is your unique ID : ${crypto.randomUUID()}`
            })
        },[]);
        const time = dayjs().valueOf();
        const [chatMessages , setChatMessages] = useState(
            JSON.parse(localStorage.getItem('message'))
            ||
            [{
                message :"hello",
                sender:"user",
                id : crypto.randomUUID(),
                time : dayjs(time).format('HH:mma')
            },{
                message:"Hello! How can I help you?",
                sender:"robot",
                id : crypto.randomUUID(),
                time : dayjs(time).format('HH:mma')
            },{
                message:"can you give me todays date",
                sender:"user",
                id : crypto.randomUUID(),
                time : dayjs(time).format('HH:mma')
            },{
                message:"Today is August 16",
                sender:"robot",
                id : crypto.randomUUID(),
                time : dayjs(time).format('HH:mma')
            }]
        );
        useEffect(() => {
            localStorage.setItem('message',JSON.stringify(chatMessages));
        },[chatMessages]);
        return(
        <div className="app-container">
            {chatMessages.length === 0 ?
            <p>Welcome To the chatbot Project! send a message using textbox below</p>
            : 
            <ChatMessages chatMessages={chatMessages}/>
            }
            <ChatInput
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}/>
        </div>
        );
    }

export default App
