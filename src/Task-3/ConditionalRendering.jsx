import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'

export default function ConditionalRendering() {
    const [user] = useState(prompt("Enter Username:"));
    const [password] = useState(prompt("Enter Password:"));
    return (
        <div>
            {(user === "Kalyan" &&
                password === "12345" ?
                <Login /> : <Logout />)
            }

        </div>
    )
}
