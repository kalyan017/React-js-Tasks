import React from 'react'
import UserList from './UserList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetails from './UserDetails'

export default function UseParamsHook() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/User/:id"
                        element={<UserDetails />}
                    />
                    <Route path="/" element={<UserList />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
