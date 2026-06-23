import React from 'react'
import Child from './Child'
import "./App.css"


export default function Parent() {
    const user1 = [{
    name: "Kalyan",
    age: 24,
    city: "Hyderabad",
    phonenum: 1234567890
  }];
  const user2 = [{
    name: "Arjun",
    age: 23,
    city: "vijayawada",
    phonenum: 2341567898
  }];
  const user3 = [{
    name: "Dattu",
    age: 25,
    city: "Chennai",
    phonenum: 9876543210
  }];
  const user4 = [{
    name: "Harsha",
    age: 25,
    city: "nepal",
    phonenum: 9888543210
  }];
  const user5 = [{
    name: "Karthik",
    age: 23,
    city: "Banglore",
    phonenum: 9877543210
  }];

  return (
    <div>
      <h1 id="heading1">Task-2</h1>
            <h2>User 1:</h2>
            <Child name={user1[0].name} age={user1[0].age} city={user1[0].city} phonenum={user1[0].phonenum} />
            <h2>User 2:</h2>
            <Child name={user2[0].name} age={user2[0].age} city={user1[0].city} phonenum={user2[0].phonenum} />
            <h2>User 3:</h2>
            <Child name={user3[0].name} age={user3[0].age} city={user3[0].city} phonenum={user3[0].phonenum} />
            <h2>User 4:</h2>
             <Child name={user4[0].name} age={user4[0].age} city={user4[0].city} phonenum={user4[0].phonenum}/>
             <h2>User 5:</h2>
              <Child name={user5[0].name} age={user5[0].age} city={user5[0].city} phonenum={user5[0].phonenum}/>
    </div>
  )
}
