
import React from "react";
import profilePic from "../assets/image.jpeg";

export default function Profile() {

 
    return (
        <div className="page">

            <div className="profile">

                <img
                    src={profilePic}
                    alt="Profile"
                />

                <h2>Kalyan Reddy</h2>

                <p>Frontend Developer</p>

            </div>

            <h2>Skills</h2>

            <div className="cards">

                <div className="card">React</div>
                <div className="card">JavaScript</div>
                <div className="card">HTML</div>
                <div className="card">CSS</div>
                <div className="card">SQL</div>
                <div className="card">Python</div>
                <div className="card">Azure cloud</div>


            </div>

            <a href="../public/KURUGANTI VAMSI KALYAN REDDY RESUME.pdf" download style={{ textDecoration: "none" }}>
                <button>Download Resume</button>
            </a>

        </div>
    );
}
