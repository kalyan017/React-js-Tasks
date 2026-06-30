import React from 'react'
import { useState } from 'react'

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

    const handleform = (e) => {
        const {value,name}=e.target
       setForm({
        
        ...form,
        [name]:value
       })
    }
    return (
        <div>
            <h2>Registration Form</h2>
            <form action="">
                <input type="text" name='Firstname' value={form.Firstname} placeholder='Enter your first name' onChange={handleform} />
                <input type="text" name='Lastname' value={form.Lastname} placeholder='Enter your last name' onChange={handleform} />
                <input type="email" name='Email' value={form.Email} placeholder='Enter your email' onChange={handleform} />
                <input type="tel" name='Mobilenumber' value={form.Mobilenumber} placeholder='Enter your mobile number' onChange={handleform} />
                <input type="password" name='password' value={form.password} placeholder='Enter your password'  onChange={handleform}/>
                <input type="password" name='ConfirmPassword' value={form.ConfirmPassword} placeholder='Confirm your password' onChange={handleform} />
                <input type="date" name='Dob' value={form.value}  onChange={handleform} />
                <label htmlFor="">Gender:</label>
                <input type="radio" name='Gender' value={form.Gender} onChange={handleform} />
                <label htmlFor="Gender">Male</label>
                <input type="radio" name='Gender' value={form.Gender}onChange={handleform} />
                <label htmlFor="Gender">Female</label>
                <textarea name="Address" id="" cols="30" rows="10" placeholder='Enter your address' value={form.Address} onChange={handleform} ></textarea><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
