import Albums from './albums'
import { React, useState, useEffect, Component } from 'react'
import axios from 'axios'

const Home = () => {
  const [albums, updateAlbums] = useState([])
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

  return (
    <div className="home">
      <div>
        <h1>Phizfork</h1>

        <img
          style={{ textAlign: 'center', maxWidth: '100%' }}
          src="https://cdn.mos.cms.futurecdn.net/j28xyTnvBtcPwPW52evvzf.jpg"
          alt="logo"
        />
        <h3>
          <i>Your one-stop shop for music reviews!</i>
        </h3>
        <div>
          {albums.map((album) => (
            <div className="AlbumGrid" key={album._id}>
              <img
                src={album.art}
                style={{
                  maxWidth: '150px',
                  border: '1px solid #ccc',
                  padding: '5px'
                }}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
