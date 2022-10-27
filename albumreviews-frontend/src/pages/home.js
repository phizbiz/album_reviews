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
          <i>Your one stop shop for music reviews.</i>
        </h3>
        <div
          style={{
            margin: '5px',
            float: 'unset',
            alignContent: 'stretch',
            flexWrap: 'wrap'
          }}
        >
          {albums.map((album) => (
            <div key={album._id} style={{ flexWrap: 'wrap' }}>
              <img
                src={album.art}
                style={{
                  maxWidth: '150px',
                  // display: 'inline-block',
                  border: '1px solid #ccc',
                  padding: '5px',
                  textAlign: 'center',
                  style: 'float',
                  display: '-ms-grid',

                  gridRow: 'auto',
                  margin: '0px 0px 50px 15px'
                  // justifyContent: 'space-evenly',
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
