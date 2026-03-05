import React from 'react'
import { useNavigate } from 'react-router';

export default function MoviePageCard({movie}) {
  const { Poster, Title, Year, Runtime, Rated, imdbID, Genre, Plot } = movie
  const navigate = useNavigate()
  console.log(movie);
  
  return (<div  className='w-[20%] border rounded-2xl'>
    <img src={Poster} alt="poster" />
    <div className='flex justify-between'>
        <p>Year</p>
        <p>{Year}</p>
    </div>
    <div className='flex justify-between'>
        <p>Rating</p>
        <p>{Rated}</p>
    </div>
    <div className='flex justify-between'>
        <p>Title</p>
        <p>{Title}</p>
    </div>
    <div className='flex justify-between'>
        <p>Genre</p>
        <p>{Genre}</p>
    </div>
    <button onClick={e => navigate(`/seats/${imdbID}`)} className='border rounded bg-gray-600 hover:bg-gray-500' >Choose Seat</button>

  </div>
  )
}
