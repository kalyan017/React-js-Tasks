import React, { useState, useEffect } from 'react'
import './Crud.css'
export default function Crud() {

    const [user, setUser] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [editId, setEditId] = useState(null);

    // READ - Get Users
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
    }, []);


    // CREATE - Add User
    const addValues = () => {

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        if (trimmedName && trimmedEmail) {

            fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                body: JSON.stringify({
                    name: trimmedName,
                    email: trimmedEmail
                }),
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            })
                .then((response) => response.json())
                .then((data) => {

                    const newUser = {
                        ...data,
                        id: user.length+1
                    };
                    setUser([...user, newUser]);
                    setName("");
                    setEmail("");
                })
        }
    };


    // DELETE - Delete User
    const deleteValues = (id) => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => {
                setUser((users) => {
                    return users.filter((person) => person.id !== id);
                });
            });
    };


    // When clicking Update button
    const editValues = (person) => {

        setName(person.name);
        setEmail(person.email);
        setEditId(person.id);

    };


    // UPDATE - Update User
    const updateValues = () => {

        fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
            method: "PUT",
            body: JSON.stringify({
                id: editId,
                name: name,
                email: email
            }),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((data) => {

                setUser((users) => {

                    return users.map((person) =>
                        person.id === editId ? data : person
                    );

                });


                setName("");
                setEmail("");
                setEditId(null);

            });
    };


    return (
        <div  className="crud-container" >

            <h2> CRUD OPERATIONS</h2>

            <table
                border={2}
                cellPadding={1}
                style={{ borderCollapse: "collapse" }}
            >

                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>


                <tbody>

                    {
                        user.map((person) => (

                            <tr key={person.id}>

                                <td>{person.id}</td>

                                <td>
                                    {person.name}
                                </td>

                                <td>
                                    {person.email}
                                </td>


                                <td>
                                    <button
                                        onClick={() => editValues(person)}
                                    >
                                        Update
                                    </button>
                                </td>


                                <td>
                                    <button
                                        onClick={() => deleteValues(person.id)}
                                    >
                                        Delete
                                    </button>
                                </td>


                            </tr>

                        ))
                    }


                    <tr>

                        <td></td>

                        <td>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Name"
                            />
                        </td>


                        <td>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                            />
                        </td>


                        <td colSpan={2}>

                            <button
                                onClick={
                                    editId ? updateValues : addValues
                                }
                            >
                                {
                                    editId ? "Update User" : "Create User"
                                }
                            </button>

                        </td>

                    </tr>


                </tbody>

            </table>

        </div>
    )
}