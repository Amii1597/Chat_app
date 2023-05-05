import React, { useEffect, useState } from 'react'
import './css/sidebar.css'
import SidebarChat from './SidebarChat';
import db from './firebase';
const Sidebar = () => {
    const[rooms,setRooms]=useState([]);
    
    useEffect(()=>{
db.collection("rooms").onSnapshot(snapshot=>{
            setRooms(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    })
  return (
    <>
        <div className='sidebar'>
    <div className="header">
        <h2>Pocket Notes</h2>
    </div>
    <div className="sidebar_chats">
        <SidebarChat addnewchat/>
        {
            rooms.map(room=>{
                return <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
            })
        }
            
      
    
    </div>
    </div>
    </>
  )
}

export default Sidebar