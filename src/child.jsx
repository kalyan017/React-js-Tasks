import React from 'react'

export default function Child({ name, age, city, phonenum }) {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>City:{city}</h1>
      <h1>Phone Num:{phonenum}</h1>
    </div>
  )
}
