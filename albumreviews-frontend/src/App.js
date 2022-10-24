import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Albums from './pages/albums'
import Reviews from './pages/reviews'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/albums" element={<Albums />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <div>
          <Link to="/albums">Albums</Link>
          <br></br>
          <Link to="/reviews">Reviews</Link>
        </div>
      </div>
      {/* <h1>All Album Reviews Here</h1> */}
      <div>
        <Albums />
      </div>
    </div>
  )
}

export default App
