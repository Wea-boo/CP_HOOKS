import React from 'react'
import StarRatings from 'react-star-ratings'


export default function MovieCard(props) {
    const { title, description, rating, poster } = props

  return (
    <div className='movie-card'>
        <img src={poster} alt="Poster Currently Unavailable" />
        <h1>{title}</h1>
        <p>{description}</p>
        <StarRatings rating={rating/2} starRatedColor="yellow" numberOfStars={5} starDimension="20px"/>
    </div>
  )
}
