import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Albums from './pages/albums'
import link from 'react-router-dom'

function Reviews() {
  const [reviews, updateReviews] = useState([])
  const [formState, setFormState] = useState({ name: '', body: '', stars: '' })
  // const [albums, updateAlbums] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/reviews')
      updateReviews(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newReview = await axios
      .post('http://localhost:3001/reviews', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateReviews([...reviews, newReview.data])
    setFormState({ name: '', body: '', stars: '' })
  }

  return (
    <div className="Reviews">
      <div>
        {reviews.map((review) => (
          <div key={review._id}>
            <h4>User: {review.name}</h4>
            <h5>Review: {review.body}</h5>
            <h5>Stars: {review.stars}</h5>
          </div>
        ))}
      </div>

      <h4>
        <i>Write Your Review!</i>
      </h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="body">Body:</label>
        <input id="body" value={formState.body} onChange={handleChange} />
        <label htmlFor="stars">Stars:</label>
        <input id="stars" value={formState.stars} onChange={handleChange} />
        <button type="submit">Add Review</button>
      </form>
    </div>
  )
}

export default Reviews
