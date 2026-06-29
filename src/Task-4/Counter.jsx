import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="counter-card">
                <h1>Counter Application</h1>
                <h2>Counter Value :</h2>
                <div className="count">{count}</div>
                <div className="btn-group">
                    <button
                        className="increment"
                        onClick={() => setCount(count + 1)}
                    >
                        Increment
                    </button>

                    <button
                        className="decrement"
                        onClick={() => count > 0 && setCount(count - 1)}
                    >
                        Decrement
                    </button>

                    <button
                        className="reset"
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}