import React from 'react'
import { useState } from 'react'
import './RegistraionForm.css'

export default function RegistrationForm() {
    const [form, setForm] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Mobilenumber: "",
        password: "",
        ConfirmPassword: "",
        Dob: "",
        Gender: "",
        Address: "",
        City: ""
    })

    const [error, setError] = useState("")
    const handleform = (e) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const fields = [
            { key: "Firstname", message: "Please enter your first name" },
            { key: "Lastname", message: "Please enter your last name" },
            { key: "Email", message: "Please enter your email" },
            { key: "Mobilenumber", message: "Please enter your mobile number" },
            { key: "password", message: "Please enter your password" },
            { key: "ConfirmPassword", message: "Please confirm your password" },
            { key: "Dob", message: "Please enter your date of birth" },
            { key: "Gender", message: "Please select your gender" },
            { key: "Address", message: "Please enter your address" },
            { key: "City", message: "Please enter your city" }
        ];

        for (const field of fields) {
            if (!form[field.key]) {
                setError(field.message);
                return;
            }
        }
        if (form.password !== form.ConfirmPassword) {
            setError("password and confirm password does not match");
            return;
        }
        setError("");
        alert("Form Submitted Successfully");
        console.log(form);

    }
    return (
        <div className='registration-container'>
            <h2>Registration Form</h2>
            {error && <h3 className="error" style={{ color: 'red' }}>{error}</h3>}
            <form onSubmit={handlesubmit} >
                <input type="text" name='Firstname' value={form.Firstname} placeholder='Enter your first name' onChange={handleform} />
                <input type="text" name='Lastname' value={form.Lastname} placeholder='Enter your last name' onChange={handleform} />
                <input type="email" name='Email' value={form.Email} placeholder='Enter your email' onChange={handleform} />
                <input type="tel" name='Mobilenumber' value={form.Mobilenumber} placeholder='Enter your mobile number' onChange={handleform} />
                <input type="password" name='password' value={form.password} placeholder='Enter your password' onChange={handleform} />
                <input type="password" name='ConfirmPassword' value={form.ConfirmPassword} placeholder='Confirm your password' onChange={handleform} />
                <input type="date" name='Dob' value={form.Dob} onChange={handleform} />
                <div className="gender">
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="Male"
                            checked={form.Gender === "Male"}
                            onChange={handleform}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="Female"
                            checked={form.Gender === "Female"}
                            onChange={handleform}
                        />
                        Female
                    </label>
                </div>
                <textarea name="Address" id="" cols="30" rows="10" placeholder='Enter your address' value={form.Address} onChange={handleform} ></textarea>
                <br />
                <select name="City" id="" value={form.City} onChange={handleform}>
                    <option value="">Select your city</option>
                    <option value="New York">New york</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                </select>
                <br />
                <button type='submit' style={{ cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    )
}
