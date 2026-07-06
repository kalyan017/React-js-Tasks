import React from 'react'
import First from './First'
import { useContext, createContext } from 'react'
import { useState } from 'react'
import './Context.css'

export const Data = createContext();

export default function UseContextHook() {

    const [theme, setTheme] = useState("light");
    const [formData, setFormData] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        MobileNumber: "",
        Password: "",
        ConfirmPassword: "",
        Dob: "",
        Gender: "",
        Address: "",
        City: ""
    });
    return (
        <div>
            <Data.Provider
                value={{
                    theme,
                    setTheme,
                    formData,
                    setFormData
                }}
            >
                <First />
            </Data.Provider>
        </div>
    )
}
