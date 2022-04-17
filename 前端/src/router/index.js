import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login'
import NewsSanBox from '../pages/newsandbox'

export default function index() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/*' exact element={localStorage.getItem('token') ? <NewsSanBox /> : <Navigate to='/login' />} />
            </Routes>
        </HashRouter>
    )
}
