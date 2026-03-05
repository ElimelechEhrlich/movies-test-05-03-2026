import React from 'react'
import MovieCard from '../comps/MovieCard'
import { useMoviesStore } from '../store/useMoviesStore'
import MoviePageCard from '../comps/MoviePageCard'
import { useParams } from 'react-router';

export default function Movie() {
      let params = useParams();

    const {movies} = useMoviesStore()
    return (
        <>
        { movies.filter(m => m.imdbID === params.id).map(
            movie =>
            <MoviePageCard movie={movie} />
        )
        }
        </>
    )
}
