import React from 'react'
import MovieCard from './MovieCard'
import { useMoviesStore } from '../store/useMoviesStore.js'

export default function MoviesGrid() {
    const { movies } = useMoviesStore()||{}
  return (
    <div className='flex gap-2 flex-wrap'>
        {movies.map(movie => <MovieCard movie={movie}/>
        )}
    </div>
  )
}
