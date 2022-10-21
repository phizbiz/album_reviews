import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {
  const [reviews, updateProducts] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/reviews')
      updateProducts(response.data)
    }
    apiCall()
  }, [])
  return (
    <div className="App">
      <h1>All Album Reviews Here</h1>
      {reviews.map((review) => (
        <div>
          <h1>{review.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default App
