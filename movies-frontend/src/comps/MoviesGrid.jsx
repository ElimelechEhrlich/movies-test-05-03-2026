import React from 'react'
import movies from '../data/movies.json'
import MovieCard from './MovieCard'

export default function MoviesGrid() {
  return (
    <div className='flex gap-2 flex-wrap'>
        {movies.map(movie => <MovieCard movie={movie}/>
        )}
    </div>
  )
}
