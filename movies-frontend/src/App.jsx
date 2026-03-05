import React from 'react'
import { Route, Routes } from "react-router";
import Header from './comps/Header'
import Home from './pages/Home'
import { useEffect } from 'react';
import fetchMovies from './api/fetchMovies';
import { useMoviesStore } from './store/useMoviesStore';
import Movie from './pages/Movie';
import Seats from './pages/Seats';

export default function App() {
    const { setMovies } = useMoviesStore()
    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(req => req.json())
        .then(data => {
            setMovies(data)
        }
        )
    }, [])
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/seats/:id" element={<Seats />} />
            </Routes>
        </>
    )
}
