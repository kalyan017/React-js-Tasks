
import React from "react";

export default function Services() {
    return (
        <div className="page">
            <h1>My Services</h1>

            <div className="cards">

                <div className="card">
                    <h3>Website Development</h3>
                    <p>Responsive websites using React.</p>
                </div>

                <div className="card">
                    <h3>Frontend Design</h3>
                    <p>Modern UI with HTML, CSS and JavaScript.</p>
                </div>

                <div className="card">
                    <h3>API Integration</h3>
                    <p>Connecting frontend with REST APIs.</p>
                </div>

                <div className="card">
                    <h3>Bug Fixing</h3>
                    <p>Debugging React applications.</p>
                </div>

            </div>
        </div>
    );
}
