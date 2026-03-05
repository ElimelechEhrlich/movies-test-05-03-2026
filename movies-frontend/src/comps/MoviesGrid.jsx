import React from 'react'
import movies from '../api/fetchMovies.js'
import MovieCard from './MovieCard'

export default function MoviesGrid() {
  return (
    <div className='flex gap-2 flex-wrap'>
        {movies.map(movie => <MovieCard movie={movie}/>
        )}
    </div>
  )
}
