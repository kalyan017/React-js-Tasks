import React, { useContext } from "react";
import { Data } from "./UseContextHook";
import Second from "./Second";
import Third from "./Third";

export default function First() {
  const { theme } = useContext(Data);

  return (
    <div className={theme}>
      <div className="form-container">

        <div className="form-header">
          <h2>UseContext Form</h2>
          <Third />
        </div>

        <Second />

      </div>
    </div>
  );
}