import React from 'react'

export default function MovieCard({movie}) {
  const { Poster, Title, Year, Rated, imdbID } = movie
  console.log(movie);
  
  return (<div onClick={() => useFetch(imdbID)} className='w-[20%] border rounded-2xl'>
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

  </div>
  )
}
