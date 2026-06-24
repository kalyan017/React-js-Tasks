import React from 'react'

export default function ListRendering() {
    let employees = [
        {
            id: 1,
            name: "Kalyan",
            age: 24,
            city: "Hyderabad",
            salary: 30000
        },
        {
            id: 2,
            name: "Rahul",
            age: 26,
            city: "Bangalore",
            salary: 35000
        },
        {
            id: 3,
            name: "Priya",
            age: 23,
            city: "Chennai",
            salary: 28000
        },
        {
            id: 4,
            name: "Arjun",
            age: 27,
            city: "Mumbai",
            salary: 40000
        },
        {
            id: 5,
            name: "Sneha",
            age: 25,
            city: "Pune",
            salary: 32000
        }
    ];

    return (
        <div id="list">
            {employees.length > 0 ? (
                employees.map((emp) => (
                    <div className="card" key={emp.id}>
                        <h2>{emp.name}</h2>
                        <p><strong>ID:</strong> {emp.id}</p>
                        <p><strong>Age:</strong> {emp.age}</p>
                        <p><strong>City:</strong> {emp.city}</p>
                        <p><strong>Salary:</strong> ₹{emp.salary}</p>
                    </div>
                ))
            ) : (
                <h1>No Data Found</h1>
            )}
        </div>
    );
}
