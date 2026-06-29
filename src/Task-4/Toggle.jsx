import React, { useState } from "react";

export default function Toggle() {
    const [theme, setTheme] = useState(false);

    return (
        <div
            style={{
                backgroundColor: theme ? "#1e1e1e" : "#f5f5f5",
                color: theme ? "white" : "black",
                minHeight: "100vh",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.5s"
            }}
        >
            <h1>Theme Toggle</h1>
            <div
                style={{
                    backgroundColor: theme ? "#333" : "white",
                    padding: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                }}
            >
                

                <button
                    onClick={() => setTheme(!theme)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        backgroundColor: theme ? "#ffc107" : "#007bff",
                        color: theme ? "black" : "white"
                    }}
                >
                    {theme ? "Light Mode" : "Dark Mode"}
                </button>

                <p style={{ marginTop: "20px", fontSize: "18px" }}>
                    You are in <strong><mark>{theme ? "Dark" : "Light"}</mark></strong> Mode
                </p>
            </div>
        </div>
    );
}