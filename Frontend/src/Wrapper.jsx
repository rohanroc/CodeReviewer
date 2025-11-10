import React from 'react'
import App from './App'
import DashBoard from './Components/DashBoard/DashBoard'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Wrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/App" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Wrapper
