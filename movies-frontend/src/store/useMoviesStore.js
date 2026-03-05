import {create} from 'zustand'
import fetchMovies from '../api/fetchMovies'

const myCallback = (set) => {return{
  movies: [],
  isLoading: false,
  setMovies: (movies) =>  set((state)=>({ movies })),
  setIsLoading: (isLoading) => set(()=>({ isLoading }))
}}
export const useMoviesStore = create(myCallback)