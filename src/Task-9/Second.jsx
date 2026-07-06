import React, { useContext, useState } from 'react'
import Third from './Third'
import { Data } from './UseContextHook'

export default function Second() {
    const { formData, setFormData } = useContext(Data);

const handleform = (e) => {
  const{name,value}=e.target
  setFormData({
    ...formData,
    [name]:value
  })
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <input type="text" name='Firstname' value={formData.Firstname} placeholder='Enter your first name' onChange={handleform} />
                <input type="text" name='Lastname' value={formData.Lastname} placeholder='Enter your last name' onChange={handleform} />
                <input type="email" name='Email' value={formData.Email} placeholder='Enter your email' onChange={handleform} />
                <input type="tel" name='MobileNumber' value={formData.MobileNumber} placeholder='Enter your mobile number' onChange={handleform} />
                <input type="password" name='Password' value={formData.Password} placeholder='Enter your password' onChange={handleform} />
                <input type="password" name='ConfirmPassword' value={formData.ConfirmPassword} placeholder='Confirm your password' onChange={handleform} />
                <input type="date" name='Dob' value={formData.Dob} onChange={handleform} />
                <div className="gender">
                    <label for="">Gender</label>
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="Male"
                            checked={formData.Gender === "Male"}
                            onChange={handleform}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="Female"
                            checked={formData.Gender === "Female"}
                            onChange={handleform}
                        />
                        Female
                    </label>
                </div>
                <textarea name="Address" id="" cols="30" rows="10" placeholder='Enter your address' value={formData.Address} onChange={handleform} ></textarea>
                <br />
                <select name="City" id="" value={formData.City} onChange={handleform}>
                    <option value="">Select your city</option>
                    <option value="New York">Ongole</option>
                    <option value="Los Angeles">Hyderabad</option>
                    <option value="Chicago">Chennai</option>
                    <option value="Houston">Banglore</option>
                </select>
                <br />
                <button type='submit' style={{ cursor: 'pointer' }}>Submit</button>
            </form>
    </div>
  )
}
