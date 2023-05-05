import React, { useEffect, useState } from 'react'
import './css/chat.css'
import { useParams } from 'react-router-dom'
import db from './firebase';
const Chat = () => {
//     const{roomId}=useParams();
//     const[roomName,setRoomName]=useState("");
//     useEffect(()=>{
// if(roomId){
//     db.collection("rooms").doc(roomId).onSnapshot(snapshot=> {
// setRoomName(snapshot.data().name);
//     })
// }
//     },[roomId])
  return (
  <>
    <div className="chat">
        <div className="chat_header">
            <div className="chat_headerinfo">
<h3>Cuvette Notes</h3>
<p>last seen</p>
            </div>
         
        </div>
    <div className="chat_body">
        <p className='chat_message chat_reciever'>
            <span className="chat_name">Amisha Patel</span>
            <span className="chat_item">12:40 PM</span>
        </p>
       
        <p className='chat_message'>
            <span className="chat_name">Amisha Patel</span>
            <span className="chat_item">12:40 PM</span>
        </p>
    </div>
    <div className="chat_footer">
        <form>
            <input type="text"  placeholder='typer your message.....'/>
            <input type="submit" />
        </form>
    </div>
    </div>
  </>
  )
}

export default Chat
// import firebase from './firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyAwLHBw8mUXZwDfXAnmTmGHIpdOAtqsTkE",
//     authDomain: "amishachat-5aa54.firebaseapp.com",
//     projectId: "amishachat-5aa54",
//     storageBucket: "amishachat-5aa54.appspot.com",
//     messagingSenderId: "689152393369",
//     appId: "1:689152393369:web:98474ca9ed812c0bf83808"
//   };
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   export default db;