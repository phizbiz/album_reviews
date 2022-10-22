import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [reviews, updateReviews] = useState([])
  const [formState, setFormState] = useState({ name: '', body: '', stars: '' })

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
      <h1>All Album Reviews Here</h1>
      {reviews.map((review) => (
        <div key={review._id}>
          <h1>{review.name}</h1>
        </div>
      ))}

      <h3>Write your review!</h3>
      <form>
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

export default App
