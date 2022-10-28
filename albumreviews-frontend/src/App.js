import React from 'react'
import { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Albums from './pages/albums'
import Reviews from './pages/reviews'
import { Link } from 'react-router-dom'
import DeleteAlbum from './pages/deleteAlbum'
import Home from './pages/home'
import UpdateAlbum from './pages/updateAlbum'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <div className="NavBar">
        <ul>
          <Link to="/">// Home // </Link>
          <Link to="/albums">Albums // </Link>
          <Link to="/deleteAlbum">Delete Album // </Link>
          <Link to="/updatealbum">Update Album //</Link>
        </ul>
      </div>
      <div className="Routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/deletealbum" element={<DeleteAlbum />} />
          <Route exact path="/updatealbum" element={<UpdateAlbum />} />
        </Routes>
      </div>

      <div className="AlbumGrid"></div>
    </div>
  )
}

export default App
