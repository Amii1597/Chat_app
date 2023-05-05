import React from 'react'
import './css/sidebar.css'
import db from './firebase';
import { Link } from 'react-router-dom';
// import AddChat from './AddChat';
// import { Avatar } from '@material-ui/core';
const SidebarChat = ({addnewchat,id,name}) => {
    const createChat=()=>{
        const room =prompt("plase enter room name");
        if(room){
            db.collection("rooms").add({
                name:room
            })
        }
    }
  return (
    !addnewchat? (
    <Link to={`room/${id}`}>
        <div className="sidebar_chat">
{/* <Avatar/> */}
    <div className="sidebar_chatinfo">
    <h2>{name}</h2>
        <p>Last Message...</p>
    </div>
       
    </div>
    </Link>
    ):(
  
        <div className="sidebar_chat" onClick={createChat}>
    <h2>Add New Chat</h2>
   
        {/* <AddChat/> */}
    </div>
 
    )
  )
}

export default SidebarChat