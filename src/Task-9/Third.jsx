import React from 'react'
import { Data } from './UseContextHook'
import { useContext } from 'react'
export default function Third() {
    const {theme,setTheme}=useContext(Data);
  return (
    <div>
      <h2><button onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{theme} Mode</button></h2>
    </div>
  )
}
