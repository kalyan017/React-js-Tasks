import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import "./UserStyle.css";
export default function UserDetails() {
    const { id } = useParams()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then((data) => {
                setTimeout(() => {
                    setUser(data);
                    setLoading(false)
                }, 1000)
            })
    }, [id]);

if (loading) {
    return (
        <div className="loading-container">
            <div className="loading">
            </div>
        </div>
    );
}
    return (
        <div className="user-details-container">
            <h1>User Details Component</h1>
            <h2>Id: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Phone Number: {user.phone}</h2>
            <h2>Website: {user.website}</h2>
            <h2>Company Name: {user.company.name}</h2>
        </div>
    )
}
