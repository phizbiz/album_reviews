import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

// const AlbumDetails = (props) => {
//   const [album, setAlbum] = useState('')
//   let { id } == useParams()

//   useEffect(() => {
//     let selectedAlbum = props.db.find((album) => album.id === parseInt(id))
//     setAlbum(selectedAlbum)
//   }, [props.db, _id])

//   return album ? (
//     <div>
//       <div>
//         <img src={album.art} />
//         <h1>{album.name}</h1>
//       </div>
//     </div>
//   ) : null
// }
// export default AlbumDetails

const AlbumDetails = () => {
  return (
    <div className="AlbumDetails">
      <div>
        <h1>ALBUM DETAILS PAGE COMING</h1>
      </div>
    </div>
  )
}

export default AlbumDetails
