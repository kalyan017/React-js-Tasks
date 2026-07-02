import React, { useEffect, useState } from "react";
import './UseEffectApi.css'

export default function UseEffectApi() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";

        fetch(apiUrl)
            .then((response) => {
                console.log(response.status);
                
                if (!response.ok) {
                    throw new Error("Failed to fetch user data.");

                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);

                // Display loading for 2 seconds
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h1>User Information</h1>

            {loading ? (
                <h2 className="loading">Loading...</h2>
            ) : error ? (
                <h2 className="error">{error}</h2>
            ) : (
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
                        {users.map((person) => (
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
            )}
        </div>
    );
}