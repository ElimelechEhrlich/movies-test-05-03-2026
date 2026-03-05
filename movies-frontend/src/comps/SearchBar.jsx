import React from 'react'
import { useMoviesStore } from '../store/useMoviesStore'

export default function SearchBar() {
    const { setSearch } = useMoviesStore()
  return (
    <input onChange={e => setSearch(e.target.value)} className='w-[80%] p-2 border' type='text' placeholder='Search movie by title or genre...'></input>
  )
}
