import React from 'react'
import MovieCard from './MovieCard'
import { useMoviesStore } from '../store/useMoviesStore.js'

export default function MoviesGrid() {
    const { movies, search } = useMoviesStore()||{}
    const filteredMovies = movies.filter( m => m.Title.toLowerCase().includes(search) || m.Genre.toLowerCase().includes(search))
    return (
    <div className='flex gap-2 flex-wrap'>
        {filteredMovies.map((movie, i) => <MovieCard key={i} movie={movie}/>
        )}
    </div>
  )
}
