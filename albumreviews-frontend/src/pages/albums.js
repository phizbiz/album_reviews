import { useState, useEffect } from 'react'
import axios from 'axios'

function Albums() {
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
    <div className="App">
      <h1>ALBUMS PAGE TEST</h1>
      <div>
        <h1>Hotel California</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
          alt="Hotel California"
        />
        {reviews.map((review) => (
          <div key={review._id}>
            <h3>User: {review.name}</h3>
            <h3>Review: {review.body}</h3>
            <h3>Stars: {review.stars}</h3>
          </div>
        ))}
      </div>

      <h3>Write your review!</h3>
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

export default Albums
