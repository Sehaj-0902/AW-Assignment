import React from 'react';
import '../styles/Chat.css'; 

const Chat = () => {
  return (
    <div className="chat-container">
        <i class="fa-regular fa-comment-dots"></i>
        <span style={{textAlign:"left", paddingLeft:"2rem", fontSize:"40px",color:"white"}}>Hello</span>
        <span style={{textAlign:"left", paddingLeft:"2rem", fontSize:"45px", color:'#3a015c'}}>Chat.</span>
        <p style={{fontSize:"18px", color:'#f1faee'}}>The last chat app you'll ever need.</p>
    </div>
  );
};

export default Chat;