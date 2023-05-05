import React from "react";
import './css/AddChat.css'
import ColorItem from "./ColorItem";
import { useEffect } from "react";
// import db from "./firebase";
const Adduser = ({ closeModal }) => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
//   const createchat=()=>{
//     const room= document.getElementsByClassName.input_text;
//     if(room){
//     db.collection("rooms").add({
//             name:room
//         })
//     }
// }
  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTheme(currentColor);
  }, []);

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };
  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");
    setTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="datashow">
        <h2 className="heading_group">Create New Notes group</h2>
        {/* Name */}
        <div style={{ display: "flex" }}>
          <b className="group_name">Group Name</b>
          <input type="text" className="input_text" placeholder="Enter Your Group Name"/>
        </div>
        {/* Colour */}
        <div style={{ display: "flex" }}>
          <b className="choose_colour">Choose Colour</b>
          <div className="color_list">
            {colors.map((color, idx) => (
              <ColorItem key={idx} setColor={setColor} color={color} />
            ))}
          </div>
        </div>
        {/* <button onClick={closeModal}>close</button> */}
        <button className="create_btn"  >Create</button>
      </div>
    </>
  );
};

export default Adduser;
