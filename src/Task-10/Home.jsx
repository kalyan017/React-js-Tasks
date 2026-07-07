
import React from "react";

export default function Home() {
   function linkedin() {
    window.open(
        "https://www.linkedin.com/in/kurugantivamsikalyanreddy/",
        "_blank"
    );
}
    return (
        <div className="page">
            <section className="hero">
                <h1>Hi, I'm Kalyan Reddy 👋</h1>
                <h3>Frontend Developer | React Developer</h3>

                <p>
                    I build responsive and user-friendly web applications using
                    HTML, CSS, JavaScript and React.
                </p>

                <button onClick={linkedin}>LinkedIn</button>
            </section>

            <section className="skills">
                <h2>Technical Skills</h2>

                <div className="cards">
                    <div className="card">HTML5</div>
                    <div className="card">CSS3</div>
                    <div className="card">JavaScript</div>
                    <div className="card">React JS</div>
                    <div className="card">SQL</div>
                    <div className="card">Python</div>
                </div>
            </section>
        </div>
    );
}
