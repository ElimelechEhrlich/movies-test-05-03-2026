import React from 'react'
import { Route, Routes } from "react-router";
import Header from './comps/Header'
import Home from './pages/Home'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}
