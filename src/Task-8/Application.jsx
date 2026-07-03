import React from 'react'
import { useState } from 'react'
import './Application.css'

export default function Application() {
    const [user, setUser] = useState({
        message: ""
    }
    );
    const [messages, setMessages] = useState([]);

    function messagehandle(e) {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const buttonhandle = (e) => {
        if (user.message.trim() === "") return;
        setMessages([...messages,
        user.message
        ])
        setUser({
            message: ""
        })
    }

    return (
        <div className="Maindiv">
            <div className="Chat-container">
                <div className="Chat-header">
                    <img src="https://i.pravatar.cc/100" alt="profile" />
                    <h2>Mini Chat Application</h2>
                </div>
                <div className="Chat-body">
                    {messages.map((msg, index) => (
                        <div className="message" key={index}>
                            {msg}
                        </div>
                    ))}
                </div>
                <div className="Chat-footer">
                    <input
                        type="text"
                        name="message"
                        value={user.message}
                        placeholder="Type a message"
                        onChange={messagehandle}
                    />
                    <button onClick={buttonhandle}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
