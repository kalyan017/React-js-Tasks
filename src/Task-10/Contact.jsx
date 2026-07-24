
import React from "react";

export default function Contact() {
    return (
        <div className="page">
            <h1>Contact Me</h1>
            <form className="contact">
                <input
                    type="text"
                    placeholder="Enter Name"
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                />
                <textarea
                    placeholder="Write your message"
                ></textarea>
                <button>Send Message</button>

            </form>
        </div>
    );
}

