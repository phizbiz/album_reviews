// import './src/App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import { BrowserRouter as Switch } from 'react-router-dom'
import Albums from './pages/albums'
import Reviews from './pages/reviews'
import { Link } from 'react-router-dom'
import AlbumDetails from './pages/AlbumDetails'
import DeleteAlbum from './pages/deletealbum'
import Home from './pages/home'

function App() {
  return (
    <div
      className="App"
      style={{ textAlign: 'center', backgroundColor: 'white' }}
    >
      <div
        className="NavBar"
        style={{
          textAlign: 'center',
          // display: 'inline-block',
          backgroundColor: 'tan'
        }}
      >
        <ul
          style={
            {
              // backgroundColor: 'tan',
              // textAlign: 'center',
              // display: 'inline-block',
              // width: 'auto',
              // WebkitTextEmphasisColor: 'white'
            }
          }
        >
          <Link to="/">// Home // </Link>
          <Link to="/albums">Albums // </Link>

          {/* <Link to="/reviews">Reviews</Link> */}

          {/* <Link to="/albums/:id">Album Details // </Link> */}

          <Link to="/deleteAlbum">Delete Album // </Link>
        </ul>
      </div>
      <div className="Routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route exact path="/reviews" element={<Reviews />} />
          {/* <Route exact path="/AlbumDetails" element={<AlbumDetails />} /> */}
          <Route exact path="/deletealbum" element={<DeleteAlbum />} />
        </Routes>
      </div>
      {/* <h1>All Album Reviews Here</h1> */}
      <div className="AlbumGrid">{/* <Albums /> */}</div>
    </div>
  )
}

export default App
