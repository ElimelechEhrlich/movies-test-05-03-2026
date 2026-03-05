import React from 'react'

export default function MovieCard({ poster, title, year, rating }) {
  return (<div>
    <img src={poster} alt="poster" />
    <div>
        <p>Year</p>
        <p>{year}</p>
    </div>
    <div>
        <p>Rating</p>
        <p>{rating}</p>
    </div>
    <div>
        <p>Title</p>
        <p>{title}</p>
    </div>

  </div>
  )
}
