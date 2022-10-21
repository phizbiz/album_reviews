import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {
  useEffect(() => {
    let response = axios.get('')
    console.log(response)
  }, [])
  return (
    <div className="App">
      <h1>All Album Reviews Here</h1>
    </div>
  )
}

export default App
