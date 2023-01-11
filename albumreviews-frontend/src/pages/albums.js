import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Reviews from './reviews'

const Albums = () => {
  const [albums, updateAlbums] = useState([])
  const [tags, updateTags] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    artist: '',
    label: '',
    art: ''
  })

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
      <h1>Phizfork</h1>
      <h2>Add An Album</h2>
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
      <h1>Album Reviews...</h1>
      <div>
        {albums.map((album) => (
          <div key={album._id}>
            <h3>
              <img src={album.art} style={{ maxWidth: '200px' }} />
            </h3>
            <h2>Album: {album.name}</h2>
            <h3>
              Artist: {album.artist}, Label: {album.label}
            </h3>

            <h3>
              <br></br>
              <i>Write your review for {album.name}</i>
              <br></br>
              <Reviews />
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Albums
