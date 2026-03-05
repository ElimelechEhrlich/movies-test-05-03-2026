import React from 'react'
import { Route, Routes } from "react-router";
import Header from './comps/Header'
import Home from './pages/Home'
import { useEffect } from 'react';
import fetchMovies from './api/fetchMovies';
import { useMoviesStore } from './store/useMoviesStore';

export default function App() {
    const { setMovies } = useMoviesStore()
    useEffect(() => {
        setMovies(fetchMovies())
    }, [])
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}
