import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserDetails from './UserDetails'
import "./UserStyle.css";


export default function UserList() {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((Response) => Response.json())
            .then((data) => (
                setUser(data)
            ))
    }, [])
    console.log(user);


    return (
        <div className='user-list-container'>
            <h1>User List Component</h1>
            <ul className="user-list" >
                {user.map((person) => (
                    <li key={person.id}>
                        <Link to={`/User/${person.id}`} className='link'>
                            {person.name}
                        </Link></li>
                ))}
            </ul>
        </div>
    )
}
