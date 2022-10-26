import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Albums from './albums'
// import Reviews from './reviews'

const DeleteAlbum = () => {
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
  }, [albums])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleDelete = async (event, id) => {
    event.preventDefault()
    console.log('Delete button firing!')
    console.log(id)
    let deleteAlbum = await axios
      .delete(`http://localhost:3001/albums/${id}`)
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
      <div style={{ textAlign: 'center' }}>
        <br></br>
        <b>Album List...</b>

        {albums.map((album) => (
          <div key={album._id}>
            <img src={album.art} style={{ maxHeight: '150px' }}></img>
            <h5>
              Album:{' '}
              <i>
                {album.name}, {album.artist}, {album.label}
              </i>
            </h5>
            <button
              onClick={(event) => {
                handleDelete(event, album._id)
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  )
}

export default DeleteAlbum
