import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'

function Albums() {
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newAlbum = await axios
      .post('http://localhost:3001/albums', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateAlbums([...albums, newAlbum.data])
    setFormState({ name: '', artist: '', label: '', art: '' })
  }

  return (
    <div className="Albums">
      <h1>ALBUMS PAGE TEST</h1>
      <div>
        <h1>Hotel California</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
          alt="Hotel California"
        />
        {albums.map((album) => (
          <div key={album._id}>
            <h3>Name: {album.name}</h3>
            <h3>Artist: {album.artist}</h3>
            <h3>Label: {album.label}</h3>
            <h3>Art: {album.art}</h3>
          </div>
        ))}
      </div>

      <h3>Add An Album</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="artist">Artist:</label>
        <input id="artist" value={formState.artist} onChange={handleChange} />
        <label htmlFor="label">Label:</label>
        <input id="label" value={formState.label} onChange={handleChange} />
        <label htmlFor="art">Art:</label>
        <input id="art" value={formState.art} onChange={handleChange} />
        <button type="submit">Add Album</button>
      </form>
    </div>
  )
}

export default Albums
