import React from 'react'
import { useState } from 'react'

export default function Toggle() {
    const [theme,SetTheme]=useState(false);
  return (
    <div style={{
        backgroundColor:theme?"#100000":"white",
        color:theme?"white":"black",
        padding:"30px"
        }}>
      <h2>Toggle Theme</h2>
      <button onClick={()=>SetTheme(!theme)}>{theme?"Dark":"Light"} Mode</button>
      <p>You are in {theme?"Dark":"Light"} Mode</p>
    </div>
  )
}
