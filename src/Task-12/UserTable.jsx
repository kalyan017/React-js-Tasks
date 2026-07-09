import React from 'react'
import useAPI from './useFetchData'
import './CustomHook.css'

export default function UserTable() {
    const { data: user, error, loading } = useAPI("https://jsonplaceholder.typicode.com/users")
    if (loading) {
        console.log("lodaing.....");
        return (
            <div className="loading-container">
                <div className="loading">
                </div>
            </div>
        );
    }
    if (error) {
        return <h1 style={{ color: "red", fontSize: "40px", textAlign: "center" }}>{error}</h1>
    }
    return (
        <div className="container">
            <h1>User Information</h1>
            {
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Website</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user.map((person) => (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>{person.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}
