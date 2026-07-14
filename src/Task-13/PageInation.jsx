import React from 'react'
import { useSearchParams } from 'react-router-dom'
// import './PageInation.css'
export default function PageInation() {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = Number(searchParams.get("page")) || 1;
    const itemsperPage = 5;
    const users = [
        {
            id: 1,
            name: "Arjun Kumar",
            email: "arjun@gmail.com",
            city: "Hyderabad",
            role: "Frontend Developer"
        },
        {
            id: 2,
            name: "Priya Sharma",
            email: "priya@gmail.com",
            city: "Bangalore",
            role: "Backend Developer"
        },
        {
            id: 3,
            name: "Rahul Verma",
            email: "rahul@gmail.com",
            city: "Chennai",
            role: "Full Stack Developer"
        },
        {
            id: 4,
            name: "Sneha Reddy",
            email: "sneha@gmail.com",
            city: "Vijayawada",
            role: "UI Designer"
        },
        {
            id: 5,
            name: "Karthik Rao",
            email: "karthik@gmail.com",
            city: "Pune",
            role: "Software Engineer"
        },
        {
            id: 6,
            name: "Anjali Singh",
            email: "anjali@gmail.com",
            city: "Delhi",
            role: "Data Analyst"
        },
        {
            id: 7,
            name: "Vamsi Krishna",
            email: "vamsi@gmail.com",
            city: "Mumbai",
            role: "React Developer"
        },
        {
            id: 8,
            name: "Neha Patel",
            email: "neha@gmail.com",
            city: "Ahmedabad",
            role: "Tester"
        },
        {
            id: 9,
            name: "Rohit Mehta",
            email: "rohit@gmail.com",
            city: "Jaipur",
            role: "DevOps Engineer"
        },
        {
            id: 10,
            name: "Divya Nair",
            email: "divya@gmail.com",
            city: "Kochi",
            role: "Product Manager"
        },
        {
            id: 11,
            name: "Sanjay Kumar",
            email: "sanjay@gmail.com",
            city: "Bhopal",
            role: "Java Developer"
        },
        {
            id: 12,
            name: "Pooja Das",
            email: "pooja@gmail.com",
            city: "Kolkata",
            role: "Python Developer"
        },
        {
            id: 13,
            name: "Manoj Reddy",
            email: "manoj@gmail.com",
            city: "Tirupati",
            role: "Cloud Engineer"
        },
        {
            id: 14,
            name: "Aisha Khan",
            email: "aisha@gmail.com",
            city: "Lucknow",
            role: "Business Analyst"
        },
        {
            id: 15,
            name: "Varun Joshi",
            email: "varun@gmail.com",
            city: "Nagpur",
            role: "Machine Learning Engineer"
        },
        {
            id: 16,
            name: "Meghana Rao",
            email: "meghana@gmail.com",
            city: "Mysore",
            role: "HR Manager"
        },
        {
            id: 17,
            name: "Akash Gupta",
            email: "akash@gmail.com",
            city: "Noida",
            role: "Database Developer"
        },
        {
            id: 18,
            name: "Lakshmi Devi",
            email: "lakshmi@gmail.com",
            city: "Visakhapatnam",
            role: "Software Tester"
        },
        {
            id: 19,
            name: "Harish Babu",
            email: "harish@gmail.com",
            city: "Warangal",
            role: "Angular Developer"
        },
        {
            id: 20,
            name: "Riya Kapoor",
            email: "riya@gmail.com",
            city: "Gurgaon",
            role: "Project Manager"
        }
    ];

    const totalPage = Math.ceil(users.length / itemsperPage);
    const startInd = (currentPage - 1) * itemsperPage;
    const endInd = startInd + itemsperPage;
    const currentItems = users.slice(startInd, endInd);

    const gotopage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPage) {
            setSearchParams({ page: pageNum })
        }
    }

    const previous = () => {
        if (currentPage > 1) {
            gotopage(currentPage - 1)
        }
    }

    const next = () => {
        if (currentPage < totalPage) {
            gotopage(currentPage + 1)
        }
    }



    return (
        <div className="pagination-container">
            <table border={2} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.city}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            <div className="pagination-container-buttons">
                <button onClick={previous}>
                    Previous
                </button>
                <div className="pagination-buttons">
                    {
                        Array.from({ length: totalPage }, (_, i) => i + 1)
                            .map((PageNum) => (
                                <button
                                    key={PageNum}
                                    onClick={() => gotopage(PageNum)}
                                    className={currentPage === PageNum ? "active-page" : ""}
                                >
                                    {PageNum}
                                </button>
                            ))
                    }
                </div>
                <button onClick={next}>
                    Next
                </button>
            </div>
        </div>
    )
}
