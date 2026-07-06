import React, { useContext, useState } from 'react'
import Third from './Third'
import { Data } from './UseContextHook'

export default function Second() {
    const {formData} = useContext(Data)
    
    return (
        <div>
            <form>
                <input type="text" name='Firstname' defaultValue={formData.Firstname} placeholder='Enter your First name'/>
                <input type="text" name='Lastname' defaultValue={formData.Lastname} placeholder='Enter your last name' />
                <input type="email" name='Email' defaultValue={formData.Email} placeholder='Enter your email' />
                <input type="tel" name='Mobilenumber' defaultValue={formData.Mobilenumber} placeholder='Enter your mobile number' />
                <input type="password" name='password' defaultValue={formData.password} placeholder='Enter your password' />
                <input type="password" name='ConfirmPassword' defaultValue={formData.ConfirmPassword} placeholder='Confirm your password' />
                <input type="date" name='Dob' defaultValue={formData.Dob} />
                <div className="gender">
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            defaultValue="Male"
                            defaultChecked={formData.Gender === "Male"}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            defaultValue="Female"
                            defaultChecked={formData.Gender === "Female"}

                        />
                        Female
                    </label>
                </div>
                <textarea name="Address" id="" cols="30" rows="10" placeholder='Enter your address' defaultValue={formData.Address} ></textarea>
                <br />
                <select name="City" id="" defaultValue={formData.City}>
                    <option value="">Select your city</option>
                    <option value="New York">New york</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                </select>
                <br />
                <button type='submit' style={{ cursor: 'pointer' }}>Submit</button>
            </form>
            <Third />
        </div>
    )
}
