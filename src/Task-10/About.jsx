
import React from "react";

export default function About() {
    return (
        <div className="page">
            <h1>About Me</h1>

            <p style={{fontSize:"20px"}}>
                I am a Computer Science graduate passionate about Frontend
                Development and modern web technologies.
            </p>

            <h2>Education</h2>

            <div className="card">
                <h3>B.Tech - Computer Science</h3>
                <p>KL University</p>
            </div>

            <h2>Achievements</h2>

            <ul>
                <li>Completed React Projects</li>
                <li>Built REST API Applications</li>
                <li>Strong knowledge of JavaScript</li>
            </ul>
        </div>
    );
}
