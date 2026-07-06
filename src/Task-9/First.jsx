import React, { useContext } from 'react'
import Second from './Second'
import { Data } from './UseContextHook'

export default function First() {
    const {theme}=useContext(Data)
  return (
    <div className={theme} >
        <h2>Form</h2>
      <Second/>
    </div>
  )
}
