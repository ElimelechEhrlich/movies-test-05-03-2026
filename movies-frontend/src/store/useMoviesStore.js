import {create} from 'zustand'
import fetchMovies from '../api/fetchMovies'

const myCallback = (set) => {return{
  movies: [],
  isLoading: false,
  error: null,
  search: '',
  setError: (error) => set((state)=> ( error )),
  setMovies: (movies) =>  set((state)=>({ movies })),
  setIsLoading: (isLoading) => set(()=>({ isLoading })),
  setSearch: (value) => set((state) => ({ search: value.toLowerCase() }))

}}
export const useMoviesStore = create(myCallback)