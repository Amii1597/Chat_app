import React from 'react'
import './css/AddChat.css'
const ColorItem = ({color,setColor}) => {
  return (
    <div className='color_item' onClick={setColor} style={{'--bg-color':color}}></div>
  )
}

export default ColorItem