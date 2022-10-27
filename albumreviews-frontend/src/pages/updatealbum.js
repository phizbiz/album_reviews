import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Albums from './albums'

const UpdateAlbum = () => {
  const [albums, updateAlbums] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    artist: '',
    label: ''
  })

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

  const handleUpdate = async (event, id) => {
    event.preventDefault()
    console.log('Put button firing!')
    let updateAlbum = await axios
      .put(`http://localhost:3001/albums/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateAlbums([...albums, updateAlbum.data])
    setFormState({ name: '', artist: '', label: '' })
  }

  return (
    <div className="UpdateAlbum" style={{ textAlign: 'center' }}>
      <h1>Phizfork Update</h1>
      <h2>Update An Album</h2>
      <h4>
        <i>"The times they are a changin'"</i>
      </h4>

      <div style={{ textAlign: 'center' }}>
        <br></br>
        <b>Album List...</b>
        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Name:</label>
          <input id="name" value={formState.name} onChange={handleChange} />
          <label htmlFor="artist">Artist:</label>
          <input id="artist" value={formState.artist} onChange={handleChange} />
          <label htmlFor="label">Label:</label>
          <input id="label" value={formState.label} onChange={handleChange} />
        </form>
        {albums.map((album) => (
          <div key={album._id}>
            <img src={album.art} style={{ maxHeight: '150px' }}></img>
            <h5>
              Album:{' '}
              <i>
                {album.name}, {album.artist}, {album.label}
              </i>
            </h5>
            <div>
              <button
                onClick={(event) => {
                  handleUpdate(event, album._id)
                }}
                type="submit"
              >
                Update Album
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpdateAlbum
