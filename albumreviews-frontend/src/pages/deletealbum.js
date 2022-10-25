import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Albums from './albums'
// import Reviews from './reviews'

function DeleteAlbum() {
  const [albums, updateAlbums] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    artist: '',
    label: '',
    art: ''
  })
  // const [albums, updateAlbums] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/albums')
      updateAlbums(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   console.log(formState)
  //   let newAlbum = await axios
  //     .post('http://localhost:3001/albums', formState)
  //     .then((response) => {
  //       return response
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   updateAlbums([...albums, newAlbum.data])
  //   setFormState({ name: '', artist: '', label: '', art: '' })
  // }

  const handleDelete = async (event) => {
    event.preventDefault()
    console.log('Delete button firing!')
    let deleteAlbum = await axios
      .delete('http://localhost:3001/albums', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateAlbums([...albums, deleteAlbum.data])
    setFormState({ name: '', artist: '', label: '' })
  }

  return (
    <div className="DeleteAlbum" style={{ textAlign: 'center' }}>
      <h1>Phizfork Delete</h1>
      <h2>Delete An Album</h2>
      <h4>
        <i>We're all just dust in the wind</i>
      </h4>
      <form onSubmit={handleDelete}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="artist">Artist:</label>
        <input id="artist" value={formState.artist} onChange={handleChange} />
        <label htmlFor="label">Label:</label>
        <input id="label" value={formState.label} onChange={handleChange} />
        <button type="submit">Delete Album</button>
      </form>
      <div style={{ textAlign: 'center' }}>
        <br></br>
        <b>Album List...</b>
        {albums.map((album) => (
          <div key={album._id}>
            <h5>
              Album: {album.name}, {album.artist}, {album.label}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeleteAlbum
